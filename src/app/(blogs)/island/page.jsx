"use client"
import Card from "@/app/Components/Card";
import React from "react";
import { useSelector } from "react-redux";

const Island = () => {
    const { allTravelBlogs } = useSelector(state => state.travel);
    const isLandBlog = allTravelBlogs.filter((item) => item.type === "Island")
    console.log(isLandBlog,"island dataaaaa");

    return <div>
        {/* <h1>island</h1> */}
        {isLandBlog.map((item, index) => (
            <Card blog={item} index={index} key={index}/>
        ))}
    </div>;
};

export default Island;
