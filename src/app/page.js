"use client";

import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();

    return (
        <div className="h-[100vh] flex flex-col">
            {/* Navbar */}
            <nav className="bg-orange-300 h-[10%] border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="max-w-screen-xl flex items-center justify-between mx-auto  p-4">
                    <span className="flex items-center space-x-3 rtl:space-x-reverse">

                        <img
                            src="Blogging.png"
                            className="h-14 w-auto object-contain"
                            alt="Flowbite Logo"

                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-cyan-950 dark:text-white">
                            BLOGFLOW
                        </span>

                    </span>

                    <div className="flex items-center space-x-3">
                        <div className="flex space-x-4">
                            <button
                                className="text-gray-700 hover:gray-blue-900 font-extrabold transition"
                                onClick={() => router.push("./login")}
                            >
                                Login
                            </button>
                            <button
                                className="text-gray-700 hover:gray-blue-900 font-extrabold transition"
                                onClick={() => router.push("./register")}
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex-grow p-6 bg-blue-300 space-y-6">
                {/* Content Box 1 */}
                <div className="flex flex-col md:flex-row justify-between items-center border-2 rounded-lg shadow-lg overflow-hidden cursor-pointer p-4 space-y-4 md:space-y-0">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="download.jpg"
                            alt="Sample Image"
                            className="w-full object-cover rounded-lg"
                            style={{ height: "auto", maxHeight: "100%" }}
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-4 space-y-4 flex flex-col justify-between">
                        <h1 className="text-3xl font-bold text-gray-800">Hello !!!!!</h1>
                        <h2 className="text-xl font-semibold text-gray-700">Title: Health</h2>
                        <p className="text-lg text-gray-600">
                            In today's fast-paced world, the importance of healthy living cannot be
                            overstated. Our modern lifestyles often lead to a range of health
                            problems, including obesity, heart disease, diabetes, and mental health
                            issues. While technology has provided us with many conveniences, it has
                            also contributed to sedentary behaviors, poor diet choices, and stress.
                            However, taking the time to adopt healthy habits can lead to a longer,
                            happier, and more productive life. This blog post explores the benefits
                            of maintaining a healthy lifestyle and offers tips on how to incorporate
                            healthy habits into your daily routine.
                        </p>
                        <button
                            onClick={() => router.push("/login")}
                            className="text-black font-bold border-2  w-[40%] rounded-lg hover:text-green-700 transition"
                        >
                            Click to show more
                        </button>
                    </div>
                </div>

                {/* Content Box 2 */}
                <div className="flex flex-col md:flex-row justify-between items-center border-2 rounded-lg shadow-lg overflow-hidden cursor-pointer  p-4 space-y-4 md:space-y-0">
                    <div className="w-full md:w-1/2 p-4 space-y-4 flex flex-col justify-between">
                        <h1 className="text-3xl font-bold text-gray-800">Hello !!!!!</h1>
                        <p className="text-lg text-gray-600">
                            In today's fast-paced world, the importance of healthy living cannot be
                            overstated. Our modern lifestyles often lead to a range of health
                            problems, including obesity, heart disease, diabetes, and mental health
                            issues. While technology has provided us with many conveniences, it has
                            also contributed to sedentary behaviors, poor diet choices, and stress.
                            However, taking the time to adopt healthy habits can lead to a longer,
                            happier, and more productive life. This blog post explores the benefits
                            of maintaining a healthy lifestyle and offers tips on how to incorporate
                            healthy habits into your daily routine.
                        </p>
                        <button
                            onClick={() => router.push("/login")}
                            className="text-black font-bold hover:text-green-700 transition"
                        >
                            Click to show more
                        </button>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="download.jpg"
                            alt="Sample Image"
                            className="w-full object-cover rounded-lg"
                            style={{ height: "auto", maxHeight: "100%" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
