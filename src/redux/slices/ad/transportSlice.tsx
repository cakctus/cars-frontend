import { createSlice } from "@reduxjs/toolkit"

const initialState: any = {}

const transportSlice = createSlice({
  name: "transport",
  initialState,
  reducers: {
    changeState(state, action) {
      const { name, value } = action.payload
      state[name] = value
    },
  },
})

export const { changeState } = transportSlice.actions

export default transportSlice.reducer
