"use client";

import { data } from "@/data/data";
import FooterIcon from "@/ui/FooterIcon";
import Search from "@/ui/Search";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
    const router = useRouter();
    const travalData = data;
    // console.log(data)
    const [theme, setTheme] = useState("light");
    const token = localStorage.getItem("token");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        setTheme(savedTheme);
    }, []);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <div className="h-screen flex flex-col">
            {/* Navbar */}
            <nav className={`h-16 border-b sticky top-0 ${theme === "light" ? "bg-gray-900 border-gray-700" : "bg-orange-300 border-gray-200"}`}>
                <div className="container mx-auto flex items-center justify-between p-4">
                    <span className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img
                            src="Blogging.png"
                            className="h-10 w-auto object-contain"
                            alt="Blogging Logo"
                        />
                    </span>
                    <ul className={`flex space-x-6 font-semibold ${theme === "light" ? "text-gray-300" : "text-gray-700"}`}>
                        <li className="hover:text-blue-900 cursor-pointer" onClick={() => alert("Please Login")}>Nature</li>
                        <li className="hover:text-blue-900 cursor-pointer" onClick={() => alert("Please Login")}>Mountains</li>
                        <li className="hover:text-blue-900 cursor-pointer" onClick={() => alert("Please Login")}>Islands</li>
                        <li className="hover:text-blue-900 cursor-pointer" onClick={() => alert("Please Login")}>Cultural</li>
                    </ul>

                    <Search />

                    {!token || token === "undefined" ? (
                        <div className="flex space-x-4">
                            <button
                                className={`flex space-x-6 font-semibold ${theme === "light" ? "text-gray-300" : "text-gray-700"}`}
                                onClick={() => router.push("/login")}
                            >
                                Login
                            </button>
                            <button
                                className={`font-semibold transition ${theme === "light" ? "text-gray-300" : "text-gray-700"}`}
                                onClick={() => router.push("/register")}
                            >
                                Register
                            </button>
                            <div>
                                <label htmlFor="switch" className="switch">
                                    <input
                                        id="switch"
                                        type="checkbox"
                                        checked={theme === "dark"}
                                        onChange={toggleTheme}
                                    />
                                    <span className="slider"></span>
                                    <span className="decoration"></span>
                                </label>
                            </div>
                        </div>
                    ) : (
                        <button
                            className={`font-semibold transition ${theme === "light" ? "text-gray-300" : "text-gray-700 hover:text-blue-900"}`}
                            onClick={() => {
                                localStorage.removeItem("token");
                                router.push("/");
                            }}
                        >
                            Logout
                        </button>
                    )}
                </div>
            </nav>
            {/* navbar end */}

            {/* Main Content */}
            <main className={`flex-grow p-6 ${theme === "light" ? "bg-gray-800 text-gray-200" : "bg-blue-100 text-black"}`}>
                {travalData.map((blog, index) => (
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
                                Title: <span className={theme === "light" ? "text-white" : "text-black"}>{blog.title}</span>
                            </h1>

                            <p className="font-bold text-orange-800">Author: <span className={theme === "light" ? "text-white" : "text-black"}> {blog.author}</span></p>
                            <p className="font-bold mt-4 text-orange-800">Description:  <span className={theme === "light" ? "text-white" : "text-black"}>{blog.description}</span></p>

                            <button id="btn" className="mt-4 p-3 font-semibold  text-orange-800 bg-orange-300 rounded-lg" onClick={() => router.push("/login")}>Click to show more</button>
                        </div>
                    </div>
                ))}

            </main>


            {/* Footer */}
            <footer className={`p-4 text-center ${theme === "light" ? "bg-gray-900 text-gray-300 font-bold" : "bg-orange-500 text-black font-bold"}`}>
                <p>
                    2024 &copy; BLOGFLOW APP . All right reserved.
                </p>
                <FooterIcon>
                    <div>
                        <div className="parent">
                            <div className="child child-1">
                                ...
                            </div>
                        </div>
                    </div>
                </FooterIcon>
            </footer>
        </div>
    );
};

export default Page;