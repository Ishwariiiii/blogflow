"use client"

import Card from "@/app/components/Card";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
    const { allTravelBlogs } = useSelector(state => state.travel);
    const mountainBlog = allTravelBlogs.filter((item) => item.type === "Mountain")
    console.log(mountainBlog);

    return <div>
        {/* <h1>mountain</h1> */}
        {mountainBlog.map((item, index) => (
            <Card blog={item} index={index} key={index}/>
        ))}
    </div>;
};

export default page;
