import React, { FC, useState } from "react"
import { useDispatch } from "react-redux"
import { logoutSlice } from "../../../redux/slices/auth/authSlice"
import { useAppDispatch } from "../../../redux/store/store"

type Props = {}

const Logout: FC<Props> = () => {
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logoutSlice())
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
