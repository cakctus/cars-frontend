import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import ChatService from "../../../services/chat/chatService"

const initialState = {
  myChats: [{ email: "", id: 0 }],
}

export const addId = createAsyncThunk<any, any>(
  "api/addId",
  async (payload) => {
    try {
      const response = await ChatService.addId(payload.myId, payload.id)
      console.log(response)
    } catch (error) {}
  }
)

export const myChats = createAsyncThunk<any, any>(
  "api/myChats",
  async (myId, { dispatch }) => {
    try {
      const response = await ChatService.myChats(myId)
      //   console.log(response)
      dispatch(myChatSucces(response.data))
    } catch (error) {}
  }
)

const chatSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addIdSlice(state, action) {
      //   state.isAuth = action.payload
    },
    myChatSucces(state, action) {
      return {
        ...state,
        myChats: action.payload,
      }
    },
  },
})

const { addIdSlice, myChatSucces } = chatSlice.actions

export default chatSlice.reducer
