import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux"
import { authApi } from "../api/auth/authApi"
import { chatApi } from "../api/chat/chatApi"
import { profileApi } from "../api/profile/profileApi"
import { carAdApi } from "../api/ads/car/carAdApi"
import authSlice from "../slices/auth/authSlice"
import chatSlice from "../slices/chat/chatSlice"
import transportSlice from "../slices/ad/transportSlice"

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [carAdApi.reducerPath]: carAdApi.reducer,
    auth: authSlice,
    chat: chatSlice,
    transport: transportSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(chatApi.middleware)
      .concat(profileApi.middleware)
      .concat(carAdApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
