import { FC, useState, useRef, RefObject, useEffect } from "react"
import { registrationSlice } from "../../../redux/slices/auth/authSlice"
import { useAppDispatch, useAppSelector } from "../../../redux/store/store"
import RegValidation from "../ShowHidePass/RegValidation"
import ShowHidePass from "../ShowHidePass/ShowHidePass"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import styles from "./Reg.module.css"

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
  const authState = useAppSelector((state: any) => state.auth)
  const notify = () => toast("Wow so easy!")

  const handleRegistration = () => {
    const v = validation
    if (v.length && v.upperCase && v.specialsCharacters) {
      dispatch(registrationSlice({ email, password }))
      setEmail("")
      setPassword("")
      // const response = await dispatch(registrationSlice({ email, password }))
      // console.log(response)
    } else {
      // todo
      alert(
        "Please enter a valid password (At least 8 characters, One Big Letters, One Special characters and number)"
      )
    }
  }

  useEffect(() => {
    const lengthRegex = /.{8,}/ // At least 8 characters
    const uppercaseRegex = /[A-Z]/ // One uppercase letter
    const specialCharNumRegex = /[\W\d]/ // One special character or number

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

  return (
    <>
      <form
        className={styles.formContainer}
        onSubmit={(e) => e.preventDefault()}
        autoComplete="off"
      >
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
            autoComplete="off"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={styles.regError}>
            {authState.regError && authState.regError}
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
            autoComplete="on"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div onClick={handlePass} className={styles.svg}>
            <ShowHidePass title={"show"} />
          </div>
        </section>
        <section className={styles.inputContainer}>
          <ul className={styles.ulValidations}>
            <li className={styles.liValidations}>
              <RegValidation color={validation.length ? "green" : "silver"} />
              <div>At least 8 characters</div>
            </li>
            <li className={styles.liValidations}>
              <RegValidation
                color={validation.upperCase ? "green" : "silver"}
              />
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
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default Reg
