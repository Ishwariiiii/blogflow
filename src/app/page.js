"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTravelBlog } from "./redux/slice/blog/travelSlice";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        <div className="h-screen flex flex-col bg-orange-200">
            {/* Pass props to Navbar */}
            <Navbar
                searchData={searchData}
                setSearchData={setSearchData}
            />

            {/* Main Content */}
            <main className="flex-grow p-6 bg-sky-100 text-gray-600">
                {filteredData?.map((blog, index) => (
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
                ))}
            </main>

            {/* Footer */}
            <Footer/>
     
        </div>
    );
};

export default Page;

