import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"

const initialState = {
  loginData: {},
  token: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  emailVerificationSuccess: false,
  isErrorMessage: "",
  signupData: {},
}

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
        state.isErrorMessage = ""
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log(action.payload, "login dataaa sliceee")
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.loginData = action.payload;
        state.token = action.payload?.token || null
        localStorage.setItem("token", action.payload?.token)
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.isErrorMessage = action.payload
      })

      .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
        state.isErrorMessage = ""
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.signupData = action.payload
        state.token = action.payload?.emailVerificationToken
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.isErrorMessage = action.payload
      })

      .addCase(verifyEmail.pending, (state, action) => {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
        state.isErrorMessage = ""
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.emailVerificationSuccess = true
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.isErrorMessage = action.payload
      })
  },
})

export default loginSlice.reducer


export const loginUser = createAsyncThunk(
  "LOGIN/USER",
  async (user) => {
    try {
      const response = await axios.post("https://node-js-wse4.onrender.com/user/login", user)
      toast.success("Login successfully", {
        position: "top-right",
        autoClose: 1000,
      });
      console.log(response, "login data")
      return response.data.data
    } catch (error) {
      toast.error("Invalid user", {
        position: "top-right",
        autoClose: 1000,
      })
    }
  }
)

export const registerUser = createAsyncThunk(
  "REGISTER/USER",
  async (user) => {
    try {
      const response = await axios.post("https://node-js-wse4.onrender.com/user", user)
      toast.success("Register user successfully", {
        position: "top-right",
        autoClose: 1000,
      })
      return response.data.data
    } catch (error) {
      toast.error("Failed", {
        position: "top-right",
        autoClose: 1000,
      })
    }
  }
);

export const verifyEmail = createAsyncThunk(
  "VERIFY/USER",
  async (verification) => {
    const { id, token } = verification
    try {
      const response = await axios.get(
        `https://node-js-wse4.onrender.com/user/email/verification?token=${token}&userId=${id}`
      )
      toast.success("Verify email successfully", {
        position: "top-right",
        autoClose: 1000,
      })
      return response.data.data
    } catch (error) {
      toast.error("Failed", {
        position: "top-right",
        autoClose: 1000,
      })
    }
  }
)