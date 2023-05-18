import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authService from "../../../services/auth/authService"
import axios from "axios"

const initialState = {
  isAuth: false,
  user: {
    userId: 0,
    email: "",
    isActivated: false,
    dateJoined: "",
    userPhoto: "",
    username: null,
    firstName: null,
    lastName: null,
    isStaff: false,
  },
}

const apiUrl = "http://localhost:5000/api"

export const registrationSlice = createAsyncThunk<any, any>(
  "api/registration",
  async (payload, { fulfillWithValue, rejectWithValue, dispatch }) => {
    try {
      const { email, password } = payload
      const response = await authService.reg(email, password)
      if (response.status === 200) {
        console.log(response)
      }
    } catch (error) {
      console.log(error)
    }
  }
)

export const loginSlice = createAsyncThunk<any, any>(
  "api/login",
  async (payload, { fulfillWithValue, rejectWithValue, dispatch }) => {
    try {
      const { email, password } = payload
      const response = await authService.login(email, password)
      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken)
        dispatch(setAuth(true))
        dispatch(setUser(response.data))
      }
    } catch (error) {
      console.log(error)
    }
  }
)

export const logoutSlice = createAsyncThunk(
  "api/logout",
  async (_, { fulfillWithValue, rejectWithValue, dispatch }) => {
    try {
      const response = await authService.logout()
      if (response.status === 200) {
        localStorage.removeItem("token")
        dispatch(setAuth(false))
        dispatch(
          setUser({
            isAuth: false,
            user: {
              userId: 0,
              email: "",
              isActivated: false,
              dateJoined: "",
              userPhoto: "",
              username: null,
              firstName: null,
              lastName: null,
              isStaff: false,
            },
          })
        )
      }
    } catch (error) {
      console.log(error)
    }
  }
)

export const refreshSLice = createAsyncThunk(
  "api/checkAuth",
  async (_, { dispatch }) => {
    try {
      const response = await axios.get(`${apiUrl}/refresh`, {
        withCredentials: true,
      })
      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken)
        dispatch(setAuth(true))
        dispatch(setUser(response.data))
        console.log(response)
      }
    } catch (error) {
      console.log(error)
    }
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action) {
      //   state.isAuth = action.payload
      return {
        ...state,
        isAuth: action.payload,
      }
    },
    setUser(state, action) {
      //   state.user = action.payload
      return {
        ...state,
        user: action.payload,
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registrationSlice.fulfilled, (state, action) => {})
  },
})

const { setAuth, setUser } = authSlice.actions

export default authSlice.reducer
