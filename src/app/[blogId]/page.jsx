"use client";
import { icons } from "@/data/data";
import Button from "@/ui/Button";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const BlogDetails = () => {
  const { travelBlog } = useSelector((state) => state.travel);
  const router = useRouter();

  const handleBackBtn = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-blue-100 p-4 relative">
      <button
        onClick={handleBackBtn}
        className="absolute top-4 left-4 bg-orange-300 text-black px-4 py-2 rounded-md hover:bg-orange-400 transition"
      >
        Back
      </button>

      <div className="flex flex-col md:flex-row w-full max-w-[1200px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8">
        <div className="w-full md:w-1/2 flex items-center justify-center bg-orange-300">
          <img
            src={travelBlog.img}
            alt={travelBlog.title}
            className="object-cover w-full h-full max-h-[500px] rounded-md"
          />
        </div>

        <div className="w-full md:w-1/2 bg-orange-300 flex flex-col p-6">
          <div className="overflow-auto max-h-[500px]">
            <div className="mb-4">
              <h1 className="text-3xl font-bold mb-2 text-gray-900">{travelBlog.title}</h1>
              <p className="text-lg font-medium text-gray-700 mb-2">
                <span className="font-semibold">Author:</span> {travelBlog.author}
              </p>
              <p className="text-lg font-medium text-gray-700">
                <span className="font-semibold">Date:</span> {travelBlog.date}
              </p>
            </div>
            <div className="text-gray-800 mt-4 space-y-4">
              <p>{travelBlog.details}</p>
            </div>
            <div className="mt-4 flex items-center justify-end">
              <span className="w-[40%] flex items-center justify-around">
                {icons.map((icon, index) => (
                  <Button key={index} icon={icon} />
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;