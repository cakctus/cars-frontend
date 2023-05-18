import React, { FC, useState } from "react"
import { useDispatch } from "react-redux"
import { loginSlice } from "../../../redux/slices/auth/authSlice"
import { useAppDispatch } from "../../../redux/store/store"

type Props = {}

const Login: FC<Props> = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const dispatch = useAppDispatch()

  const handleRegistration = () => {
    dispatch(loginSlice({ email, password }))
  }

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegistration}>Login</button>
    </div>
  )
}

export default Login
