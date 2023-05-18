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
    const e = isValidEmail(email)
    if (e) {
      dispatch(registrationSlice({ email, password }))
    } else {
      // todo
      // alert("not email")
    }
  }

  function isValidEmail(email: string): boolean {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  return (
    <div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleRegistration}>Register</button>
    </div>
  )
}

export default Reg
