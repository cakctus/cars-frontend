import React, { FC, useState, useRef, RefObject } from "react"
import { useDispatch } from "react-redux"
import { loginSlice } from "../../../redux/slices/auth/authSlice"
import { useAppDispatch } from "../../../redux/store/store"
import ShowPass from "../svgs/ShowPass"
import HidePass from "../svgs/HidePass"
import styles from "./../Reg/Reg.module.css"

type Props = {}

const Login: FC<Props> = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const [handlePassword, setHandlePassword] = useState<string>("show")
  const dispatch = useAppDispatch()

  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)

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
    <form className={styles.formContainer}>
      <h2 className={styles.titles}>Hello! Welcome back!</h2>
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
          {handlePassword === "show" ? (
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true"
              width={15}
              color="silver"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              id="showPass"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 001 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
                fill="currentColor"
              ></path>
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true"
              width={15}
              color="silver"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                fill="currentColor"
              ></path>
            </svg>
          )}
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
