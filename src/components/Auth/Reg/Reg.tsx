import React, { FC, useState, useRef, RefObject, useEffect } from "react"
import { useDispatch } from "react-redux"
import { registrationSlice } from "../../../redux/slices/auth/authSlice"
import { AppDispatch } from "../../../redux/store/store"
import { useAppDispatch } from "../../../redux/store/store"
import styles from "./Reg.module.css"
import ShowPass from "../svgs/ShowPass"
import HidePass from "../svgs/HidePass"
import RegValidation from "../svgs/RegValidation"

type Props = {}

const Reg: FC<Props> = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [handlePassword, setHandlePassword] = useState<string>("show")
  const [validation, setValidation] = useState<any>({
    length: false,
    upperCase: false,
    specialsCharacters: false,
  })
  const dispatch = useAppDispatch()
  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)

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

  function validatePassword(password: string) {
    const lengthRegex = /.{8,}/ // At least 8 characters
    const uppercaseRegex = /[A-Z]/ // One uppercase letter
    const specialCharNumRegex = /[\W\d]/ // One special character or number

    return (
      lengthRegex.test(password) &&
      uppercaseRegex.test(password) &&
      specialCharNumRegex.test(password)
    )
  }

  useEffect(() => {
    const lengthRegex = /.{8,}/ // At least 8 characters
    const uppercaseRegex = /[A-Z]/ // One uppercase letter
    const specialCharNumRegex = /[\W\d]/ // One special character or number

    console.log("pass")
    // if (
    //   lengthRegex.test(password) ||
    //   uppercaseRegex.test(password) ||
    //   specialCharNumRegex.test(password)
    // ) {
    //   setValidation({
    //     ...validation,
    //     length: true,
    //     handlePassword: true,
    //     specialsCharacters: true,
    //   })
    // }
    if (lengthRegex.test(password)) {
      setValidation((prevState: any) => ({
        ...prevState,
        length: true,
      }))
    } else {
      setValidation((prevState: any) => ({
        ...prevState,
        length: false,
      }))
    }

    if (uppercaseRegex.test(password)) {
      setValidation((prevState: any) => ({
        ...prevState,
        upperCase: true,
      }))
    } else {
      setValidation((prevState: any) => ({
        ...prevState,
        upperCase: false,
      }))
    }

    if (specialCharNumRegex.test(password)) {
      setValidation((prevState: any) => ({
        ...prevState,
        specialsCharacters: true,
      }))
    } else {
      setValidation((prevState: any) => ({
        ...prevState,
        specialsCharacters: false,
      }))
    }
  }, [password])

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

  // console.log(validation)

  return (
    <form className={styles.formContainer}>
      <h2 className={styles.titles}>Create your cars.md account!</h2>
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
          autoComplete="off"
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
      <section className={styles.inputContainer}>
        <ul className={styles.ulValidations}>
          <li className={styles.liValidations}>
            <RegValidation color={validation.length ? "green" : "silver"} />
            <div>At least 8 characters</div>
          </li>
          <li className={styles.liValidations}>
            <RegValidation color={validation.upperCase ? "green" : "silver"} />
            <div>Letters</div>
          </li>
          <li className={styles.liValidations}>
            <RegValidation
              color={validation.specialsCharacters ? "green" : "silver"}
            />
            <div>Special characters and number</div>
          </li>
        </ul>
        <p className={styles.regTerms}>
          The
          <span className={styles.linkTerm}>
            <a href="#">General Terms and Conditions apply</a>
          </span>
          . Information on the way all data are processed can be found in our{" "}
          <span className={styles.linkTerm}>
            <a href="#">Privacy Policy</a>
          </span>
          .
        </p>
      </section>
      <section className={styles.buttonContainer}>
        <button className={styles.buttonAuth} onClick={handleRegistration}>
          Register
        </button>
      </section>
    </form>
  )
}

export default Reg
