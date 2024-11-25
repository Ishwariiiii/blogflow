"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTravelBlog } from "./redux/slice/blog/travelSlice";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Page = () => {
    const [searchData, setSearchData] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const { allTravelBlogs } = useSelector(state => state.travel);
    const router = useRouter();
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (searchData) {
            const filtered = allTravelBlogs.filter((item) =>
                item.title.toLowerCase().includes(searchData.toLowerCase()) ||
                item.description.toLowerCase().includes(searchData.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(allTravelBlogs);
        }
    }, [searchData, allTravelBlogs]);

    const handleButtonClick = (blog) => {
        if (token && token !== "undefined") {
            router.push(`/${blog.id}`);
            dispatch(getTravelBlog(blog));
        } else {
            router.push("/login");
        }
    };

    return (
        <div className="h-[100vh] flex flex-col bg-orange-200">
         
            {/* Pass props to Navbar */}
            <Navbar
                searchData={searchData}
                setSearchData={setSearchData}
            />
            {/* hero section */}
            {/* <section className="h-[60vh] bg-gradient-to-r bg-sky-100 to-indigo-600 flex flex-col justify-center items-center text-black text-center p-6">
                <h1 className="text-5xl font-bold mb-4">Hello...</h1>
                <h1 className="text-5xl font-bold mb-4">Welcome to Our Travel Blog</h1>
                <h1 className="text-4xl">Explore the World with Us</h1>
                <h2 className="m-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h2>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h2>
                <p className="text-xl mb-4">Traveling is more than just a hobby; it’s a way of life. Join us as we embark on journeys across the globe, discovering hidden gems, sharing personal experiences, and offering valuable insights into the world’s most beautiful places. From cityscapes to remote villages, our blog covers it all!.</p>
                <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-200">
                    Get Started
                </button>
            </section> */}
            {/* hero section enddddd */}



            {/* Main Content */}
            <main className="flex-grow p-6 bg-sky-100 text-gray-600">
                {
                    filteredData?.map((blog, index) => {
                        if (index % 2 == 0) {
                            return (
                                <div
                                    key={index}
                                    className={`container flex flex-col w-[60%] ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse mx-auto float-right"
                                        } items-center rounded-lg shadow-2xl overflow-hidden p-4 mb-6`}
                                >
                                    <div className="md:w-2/5">
                                        <img
                                            src={blog.img}
                                            alt="Healthy Living"
                                            className="w-full rounded-lg object-cover"
                                        />
                                    </div>
                                    <div className="w-full md:w-3/5 p-6">
                                        <h1 className="font-bold text-orange-800">
                                            Title: <span className="text-gray-600">{blog.title}</span>
                                        </h1>

                                        <p className="font-bold text-orange-800">Author: <span className="text-gray-600"> {blog.author}</span></p>
                                        <p className="font-bold mt-4 text-orange-800">Description:  <span className="text-gray-600">{blog.description}</span></p>

                                        <button id="btn" className="mt-4 p-3 font-semibold  text-orange-800 bg-orange-300 rounded-lg"
                                            onClick={() => { handleButtonClick(blog) }}>Click to show more</button>
                                    </div>
                                </div>
                            )
                        }
                    })}
            </main>

            {/* Footer */}
            <Footer />

        </div>
    );
};

export default Page;