import React from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const Navbar = ({ searchData, setSearchData }) => {
    const { allTravelBlogs } = useSelector(state => state.travel);
    const router = useRouter();
    const token = localStorage.getItem("token");

    return (
        <div>
            <nav className="h-16 border-b sticky top-0 bg-orange-200 border-gray-700">
                <div className="container mx-auto flex items-center justify-between p-4">
                    <span className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img
                            src="Blogging.png"
                            className="h-10 w-auto object-contain"
                            alt="Blogging Logo"
                        />
                    </span>
                    <ul className="flex space-x-6 font-semibold text-gray-600">
                        <li
                            className="hover:text-blue-900 cursor-pointer"
                            onClick={() => handleCategoryClick("Nature")}
                        >
                            Nature
                        </li>
                        <li className="hover:text-blue-900 cursor-pointer" onClick={() => alert("Please Login")}>Mountains</li>
                        <li className="hover:text-blue-900 cursor-pointer" onClick={() => alert("Please Login")}>Islands</li>
                        <li className="hover:text-blue-900 cursor-pointer" onClick={() => alert("Please Login")}>Cultural</li>
                    </ul>

                    {/* Search input */}
                    <input
                        type="search"
                        value={searchData}
                        onChange={(e) => setSearchData(e.target.value)}
                        placeholder="Search blogs..."
                        className="p-2 rounded-lg bg-gray-200"
                    />

                    {/* Auth buttons */}
                    {!token || token === "undefined" ? (
                        <div className="flex space-x-4">
                            <button
                                className="flex space-x-6 font-semibold text-gray-600"
                                onClick={() => router.push("/login")}
                            >
                                Login
                            </button>
                            <button
                                className="font-semibold text-gray-600"
                                onClick={() => router.push("/register")}
                            >
                                Register
                            </button>
                        </div>
                    ) : (
                        <button
                            className="font-semibold text-gray-600 hover:text-blue-900"
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
        </div>
    );
};

export default Navbar;