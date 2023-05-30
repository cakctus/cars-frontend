import React, { FC, useState, useEffect, useRef, RefObject } from "react"
import { loginSlice, toggleIsAuth } from "../../../redux/slices/auth/authSlice"
import { useAppDispatch, useAppSelector } from "../../../redux/store/store"
import ShowHidePass from "../ShowHidePass/ShowHidePass"
import {
  cleanRegSuccess,
  cleanLoginError,
} from "../../../redux/slices/auth/authSlice"
import { useNavigate } from "react-router-dom"

import styles from "./../Reg/Reg.module.css"

type Props = {}

const Login: FC<Props> = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const [handlePassword, setHandlePassword] = useState<string>("show")
  const dispatch = useAppDispatch()

  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)

  const authState = useAppSelector((state: any) => state.auth)

  const navigate = useNavigate()

  useEffect(() => {
    if (authState.regSuccess) {
      const cleanSuccess = setTimeout(() => {
        dispatch(cleanRegSuccess(""))
      }, 3000)

      return () => clearTimeout(cleanSuccess)
    }

    if (authState.loginError) {
      const cleanLogin = setTimeout(() => {
        dispatch(cleanLoginError(""))
      }, 3000)

      return () => clearTimeout(cleanLogin)
    }

    if (authState.isAuth) {
      navigate("/")
      dispatch(toggleIsAuth())
    }
  }, [authState.regSuccess, authState.loginError, authState.isAuth])

  const handleRegistration = () => {
    dispatch(loginSlice({ email, password }))
  }

  const handlePass = () => {
    const pass = inputRef!.current

    if (pass) {
      if (pass.type === "password") {
        pass.type = "text"
        setHandlePassword("hide")
      } else {
        pass.type = "password"
        setHandlePassword("show")
      }
    }
  }

  return (
    <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
      <h2 className={styles.titles}>Hello! Welcome back!</h2>
      <h4 className={styles.loginError}>
        {authState.loginError && authState.loginError}
      </h4>
      <section className={styles.inputContainer}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          className={styles.input}
          type="email"
          value={email}
          name="email"
          id="email"
          autoComplete="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className={styles.regSuccess}>
          {authState.regSuccess && authState.regSuccess}
        </div>
      </section>
      <section className={styles.inputContainer}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          className={styles.input}
          type="password"
          value={password}
          name="password"
          id="password"
          placeholder="Password"
          minLength={8}
          ref={inputRef}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div onClick={handlePass} className={styles.svg}>
          <ShowHidePass title={handlePassword} />
        </div>
      </section>
      <section className={styles.buttonContainer}>
        <button className={styles.buttonAuth} onClick={handleRegistration}>
          Sign in
        </button>
      </section>
    </form>
  )
}

export default Login
