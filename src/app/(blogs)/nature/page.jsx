"use client"
import Card from "@/app/components/Card";
import React from "react";
import { useSelector } from "react-redux";

const Nature = () => {
    const { allTravelBlogs } = useSelector(state => state.travel);
    const natureBlog = allTravelBlogs.filter((item) => item.type === "nature")
    console.log(natureBlog);

    return (<div>
        {/* <h1>nature</h1> */}
        {natureBlog.map((item, index) => (
            <Card blog={item} index={index} key={index}/>
        ))}
    </div>)
};

export default Nature;
