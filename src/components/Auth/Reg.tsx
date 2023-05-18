import React, { FC, useState } from "react"
import { useDispatch } from "react-redux"
import { registrationSlice } from "../../redux/slices/auth/authSlice"
import { AppDispatch } from "../../redux/store/store"
import { useAppDispatch } from "../../redux/store/store"

type Props = {}

const Reg: FC<Props> = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const dispatch = useAppDispatch()

  const handleRegistration = () => {
    dispatch(registrationSlice({ email, password }))
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
      <button onClick={handleRegistration}>Register</button>
    </div>
  )
}

export default Reg
