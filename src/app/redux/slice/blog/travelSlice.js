import { createSlice } from "@reduxjs/toolkit";

const travelSlice = createSlice({
    name: "travel",
    initialState: {
        allTravelBlogs: [],
        travelBlog: {}
    },
    reducers: {
        getTravelBlog: (state, action) => {
            console.log(action.payload, "travel data from slice")

            return {
                travelBlog: action.payload
            }
        }
    },
    extraReducers: builder => {

    }
})
export const { getTravelBlog } = travelSlice.actions
export default travelSlice.reducer