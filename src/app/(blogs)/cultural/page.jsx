"use client"
import Card from "@/app/components/Card";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
    const { allTravelBlogs } = useSelector(state => state.travel);
    const culturalBlog = allTravelBlogs.filter((item) => item.type === "Cultural")
    console.log(culturalBlog);

    return <div>
        {/* <h1>cultural</h1> */}
        {culturalBlog.map((item, index) => (
            <Card blog={item} index={index} key={index}/>
        ))}
    </div>;
};

export default page;
