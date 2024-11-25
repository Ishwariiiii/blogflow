"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComments } from "../redux/slice/blog/travelSlice";
import { PrivateRoutes } from "../Routes/PrivateRoutes";
import FooterIcon from "@/ui/FooterIcon";


const BlogDetails = () => {

  const [like, setLike] = useState(false);
  const [addComment, setAddComment] = useState(false);
  const dispatch = useDispatch()
  const [newComment, setNewComment] = useState({
    name: "",
    comment: ""
  })
  const { travelBlog, comments } = useSelector((state) => state.travel);
  const router = useRouter();
  const [isShare, setIsShare] = useState(false)

  const handleBackBtn = () => {
    router.push('/');
  };

  const handleLikeClick = () => {
    setLike(!like);
  };

  const handleComment = () => {
    if (addComment) {
      setAddComment(false)
    } else {
      setAddComment(true)
    }
  }

  const saveComment = (e) => {
    e.preventDefault()
    dispatch(addComments(newComment))
    console.log(newComment)
    setAddComment(false)
  }

  const handleShare = () => {
    if (isShare) {
      setIsShare(false)
    } else {
      setIsShare(true)
    }
  }


  return (
    <div className="min-h-screen bg-sky-100 p-4 relative">
      <button
        onClick={handleBackBtn}
        className="absolute top-4 left-4 bg-orange-200 text-black px-4 py-2 rounded-md hover:bg-orange-400 transition"
      >
        Back
      </button>

      <div className="flex flex-col md:flex-row w-full max-w-[1200px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8">
        <div className="w-full md:w-1/2 flex items-center justify-center bg-orange-200">
          <img
            src={travelBlog.img}
            alt={travelBlog.title}
            className="object-cover w-full h-full max-h-[500px] rounded-md"
          />
        </div>

        <div className="w-full md:w-1/2 bg-orange-200 flex flex-col p-6">
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

            <div className="mt-4 flex items-center justify-end space-x-4">

              <button className="flex items-center justify-center p-2 bg-gray-200  rounded-md hover:bg-gray-300" onClick={handleLikeClick}>
                <i className={`fa-heart ${like ? 'fa-solid  text-red-800' : 'fa-regular text-black'}`}></i>
              </button>

              <button
                className="flex items-center justify-center p-2 bg-gray-200 rounded-md hover:bg-gray-300"
                onClick={handleComment}
              >
                <i className="fa-regular fa-comment text-gray-700 text-xl" ></i>
              </button>

              <button className="flex items-center justify-center p-2 bg-gray-200 rounded-md hover:bg-gray-300"
                onClick={handleShare}>
                <i className="fa-solid fa-share text-gray-700 text-xl" ></i>
              </button>
              {isShare ?
                <FooterIcon /> :
                <></>}
            </div>
            

            <div>
              {/* <h3 className="text-2xl font-semibold text-gray-900 mb-4">Comments ({comments.length})</h3> */}
              <ul className="space-y-4">
                {comments?.map((comment, index) => (
                  <li key={index} className="border-b border-gray-300 pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="text-xl font-semibold text-gray-800">
                        Name: <span>{comment.name}</span>
                      </h5>
                    </div>
                    <h6 className="text-lg font-semibold text-gray-700">
                      Comment: <span className="font-normal">{comment.comment}</span>
                    </h6>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {addComment && (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-full max-w-md space-y-4">
            <h3 className="text-2xl font-semibold text-center">Add Your Comment</h3>
            <input
              type="text"
              name="name"
              value={newComment.name}
              onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
              placeholder="Username"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Write comment here..."
              name="comment"
              value={newComment.comment}
              onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
            />
            <div className="flex justify-center space-x-4">
              <button
                className="bg-orange-300 text-black px-4 py-2 rounded-md hover:bg-orange-700"
                onClick={() => setAddComment(false)}
              >
                Close
              </button>
              <button className="bg-green-400 text-black px-4 py-2 rounded-md hover:bg-green-500" onClick={saveComment}>
                Add Comment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivateRoutes(BlogDetails);



