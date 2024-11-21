import { comments, data } from "@/data/data";
import { createSlice } from "@reduxjs/toolkit";

const travelSlice = createSlice({
    name: "travel",
    initialState: {

        allTravelBlogs: data,
        travelBlog: {},
        comments:comments
    },
    reducers: {
        getTravelBlog: (state, action) => {
            console.log(action.payload, "travel data from slice")
            return {
                ...state,
                travelBlog: action.payload
            }
        },
        addComments : (state,action)=>{
            return{
                ...state,
                comments:[...state.comments,action.payload]
            }
        }
    },
    extraReducers: builder => {

    }
})
export const { getTravelBlog , addComments} = travelSlice.actions
export default travelSlice.reducer
