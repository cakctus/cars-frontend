import { useState, useEffect, useRef } from "react"
import Header from "../Header/Header"
import {
  useGetCountriesQuery,
  useUpdateUserMutation,
} from "../../../redux/api/profile/profileApi"
import Email from "../Svg/Email"
import styles from "./Detail.module.css"
import Username from "../Svg/Username"
import Photo from "../Svg/Photo"
import Code from "../Svg/Code"
import Number from "../Svg/Number"
import Seller from "../Svg/Seller"
import Comunication from "../Svg/Comunication"
import axios from "axios"
import auth from "../../../http"
import profileService from "../../../services/profile/profileService"
import DateJoined from "../Svg/DateJoined"

type Props = {
  user?: any
  setUser?: any
  onUserChange?: (updatedUser: any) => void
}

const Detail = ({}: Props) => {
  const { data: countries } = useGetCountriesQuery("")
  const [updateUser, { isLoading }] = useUpdateUserMutation()
  const [userInput, setUserInput] = useState<any>()
  const [user, setUser] = useState<any>(
    JSON.parse(localStorage.getItem("user") || "{}")
  )
  const [userPhoto, setUserPhoto] = useState<any>(null)
  const [profilePhoto, setProfilePhoto] = useState<any>(null)
  const [profileNumbers, setProfileNumbers] = useState<any>([])
  const [numberInput, setNumberInput] = useState<any>()
  const [toggleSlice, setToggleSlice] = useState<boolean>(false)
  const [file, setFile] = useState<any>(null)
  const [photo, setPhoto] = useState<any>(null)
  const [pphoto, setPPhoto] = useState<any>(null)
  const [error, setError] = useState<any>({ message: "" })
  const vendors = ["private", "dealer", "official dealer"]
  const comunicationsMethod = ["phone", "chat"]
  const fileInput = useRef<any>(null)

  useEffect(() => {
    setUserInput(user)

    if (user?.userPhoto?.length > 0) {
      setUserPhoto(
        `http://localhost:5000/media/profile/users/${user?.userPhoto}`
      )
    } else if (photo) {
      setUserPhoto(photo)
    } else {
      setUserPhoto("http://localhost:5000/media/profile/default/default.webp")
    }

    if (user?.userProfilePhoto?.length > 0) {
      setProfilePhoto(
        `http://localhost:5000/media/profile/users/${user?.userProfilePhoto}`
      )
    } else if (pphoto) {
      setProfilePhoto(pphoto)
    }
    setProfileNumbers(user?.numbers)
  }, [user, photo, pphoto, numberInput]) // profileNumbers

  useEffect(() => {
    const refreshToken = async () => {
      try {
        const response = await profileService.updateProfile()
        setUser(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    refreshToken()
  }, [])

  const handleUserChange = (e: any) => {
    const name = e.target.name
    const value =
      name === "number" ? checkAndRemoveZero(e.target.value) : e.target.value

    if (name === "number") {
      setNumberInput(value)
    }

    const type = e.target.type
    const file = e.target?.files
    const files = e.target?.files

    setUser((prevUser: any) => ({
      ...prevUser,
      [name]: type === "file" ? file[0] : value,
    }))

    setFile((prevUser: any) => ({
      ...prevUser,
      [name]: value,
    }))

    if (type === "file") {
      if (name === "userPhoto") {
        const reader = new FileReader()

        reader.addEventListener("load", () => {
          setPhoto(reader.result)
        })

        if (e.target.files[0]) {
          reader.readAsDataURL(e.target.files[0])
        }
      }
    }

    if (type === "file") {
      if (name === "userProfilePhoto") {
        const reader = new FileReader()

        reader.addEventListener("load", () => {
          setPPhoto(reader.result)
        })

        if (e.target.files[0]) {
          reader.readAsDataURL(e.target.files[0])
        }
      }
    }
  }

  const handleFileInput = () => {
    const file = fileInput.current
    if (file) {
      file.click()
    }
  }

  function checkAndRemoveZero(num: number): number {
    if (user && user?.countryCode === "+373") {
      const numStr = num.toString()
      if (numStr.length > 1 && numStr[0] === "0") {
        return parseInt(numStr.substring(1))
      }
    }
    return num
  }

  const handleUpdatePhoto = async () => {
    const userDto = user
    if (!numberInput) {
      delete userDto?.number
    }
    const data = new FormData()
    data.append("userPhoto", user?.userPhoto)
    data.append("userProfilePhoto", user?.userProfilePhoto)
    data.append("userId", user?.userId)
    data.append("body", JSON.stringify(userDto))
    const response = await fetch("http://localhost:5000/api/profile/user-dto", {
      method: "POST",
      body: data,
    })
    if (response.status === 400 || response.ok === false) {
      const data = await response.json()
      setError(data)
    }

    if (response.ok && numberInput) {
      const n = {
        id: Date.now(),
        number: numberInput,
        userId: user?.userId,
      }
      profileNumbers.push(n)
      setProfileNumbers((prev: any) => [...prev, n])
      setNumberInput("")
    }

    // setProfileNumbers((prev: any) => ({
    //   ...prev,
    //   [n.id]: {
    //     ...n,
    //   },
    // }))
  }

  useEffect(() => {
    let intervalId: any

    if (error.message) {
      intervalId = setInterval(() => {
        setError({ message: "" })
      }, 3000)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [error.message])

  console.log(profileNumbers)
  console.log(numberInput)

  const showArrayContacts = () => {
    setToggleSlice((prev: boolean) => !prev)
    console.log("click")
  }

  const deleteNumber = async (id: any) => {
    console.log(id)
    try {
      setProfileNumbers((prev: any) => {
        console.log(prev)
        return prev?.filter((number: any) => number.id !== id)
      })
      const data = await profileService.deletePhone(id)
      if (data.status === 200) {
        //
        setError({ message: "Number successfully deleted." })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header
        t={"user"}
        userPhoto={userPhoto}
        profilePhoto={profilePhoto}
        userInput={userInput}
        updateUser={handleUpdatePhoto}
        handleUserChange={handleUserChange}
      />
      <div>{error?.message}</div>
      <div className={styles.detail}>
        <div className={styles.detailItem}>
          <label className={styles.detailItemTitle} htmlFor="date">
            Date Joined
          </label>
          <div className={styles.svgDiv}>
            <DateJoined />
          </div>
          <input
            onChange={handleUserChange}
            className={styles.inputText}
            type="text"
            id="date"
            name="date"
            value={new Date(user?.dateJoined).toLocaleDateString()}
            readOnly
          />
        </div>
        <div className={styles.detailItem}>
          <label className={styles.detailItemTitle} htmlFor="email">
            Email
          </label>
          <div className={styles.svgDiv}>
            <Email />
          </div>
          <input
            onChange={handleUserChange}
            className={styles.inputText}
            type="text"
            id="email"
            name="email"
            value={user?.email}
            readOnly
          />
        </div>
        <div className={styles.detailItem}>
          <label className={styles.detailItemTitle} htmlFor="username">
            Username
          </label>
          <div className={styles.svgDiv}>
            <Username />
          </div>
          <input
            onChange={handleUserChange}
            className={styles.inputText}
            name="username"
            value={user?.username}
            id="username"
            maxLength={10}
            type="text"
          />
        </div>
        <div className={styles.detailItem}>
          <div className={styles.detailItemTitle}>Your photo</div>
          <div className={styles.svgDiv}>
            <Photo />
          </div>
          <div className={styles.userPhotoBlock}>
            <img
              onClick={handleFileInput}
              className={styles.userPhoto}
              width={60}
              src={userPhoto}
              alt=""
            />
            <input
              onChange={handleUserChange}
              ref={fileInput}
              type="file"
              className={styles.hiddenFile}
              name="userPhoto"
              // onChange={handleUser}
            />
            {/* <button onClick={handleUpdatePhoto}>update photo</button> */}
          </div>
        </div>
        <div className={styles.detailItem}>
          <label className={styles.detailItemTitle} htmlFor="countryCode">
            Country code
          </label>
          <div className={styles.svgDiv}>
            <Code />
          </div>
          <select
            className={styles.inputText}
            name="countryCode"
            id="countryCode"
            onChange={handleUserChange}
          >
            <option value={user?.countryCode}>{user?.countryCode}</option>
            {countries?.map((code: any, index: number) => {
              return (
                <option value={code} key={index}>
                  {code}
                </option>
              )
            })}
          </select>
        </div>

        <div className={styles.detailItems}>
          <label
            onClick={showArrayContacts}
            className={styles.detailItemTitle}
            htmlFor="numbers"
          >
            Phones
            {profileNumbers?.length > 5 && (
              <svg
                className={`${toggleSlice && styles.transformSvg}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                id="expand-more"
              >
                <path fill="none" d="M24 24H0V0h24v24z" opacity=".87"></path>
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
              </svg>
            )}
          </label>
          <div>
            <div className={styles.svgDiv}>
              <Number />
            </div>
            {/* <select className={styles.inputText} name="numbers" id="numbers"> */}
            {/* <option value={user?.number}>{user?.number}</option> */}
            <div
              onClick={showArrayContacts}
              className={styles.clickShowArray}
            ></div>
            {profileNumbers
              ?.slice(0, toggleSlice ? profileNumbers?.length : 5)
              ?.map((number: any, index: number) => {
                return (
                  // <option value={number.number} key={index}>
                  //   {number.number}
                  // </option>
                  <>
                    <div key={index} className={styles.deleteItems}>
                      <div>{number.number}</div>
                      <div
                        className={styles.deleteItemSvg}
                        onClick={() => deleteNumber(number.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 64 64"
                          id="delete"
                        >
                          <path d="M17.586 46.414c.391.391.902.586 1.414.586s1.023-.195 1.414-.586L32 34.828l11.586 11.586c.391.391.902.586 1.414.586s1.023-.195 1.414-.586a2 2 0 0 0 0-2.828L34.828 32l11.586-11.586a2 2 0 1 0-2.828-2.828L32 29.172 20.414 17.586a2 2 0 1 0-2.828 2.828L29.172 32 17.586 43.586a2 2 0 0 0 0 2.828z"></path>
                          <path d="M32 64c8.547 0 16.583-3.329 22.626-9.373C60.671 48.583 64 40.547 64 32s-3.329-16.583-9.374-22.626C48.583 3.329 40.547 0 32 0S15.417 3.329 9.374 9.373C3.329 15.417 0 23.453 0 32s3.329 16.583 9.374 22.626C15.417 60.671 23.453 64 32 64zM12.202 12.202C17.49 6.913 24.521 4 32 4s14.51 2.913 19.798 8.202C57.087 17.49 60 24.521 60 32s-2.913 14.51-8.202 19.798C46.51 57.087 39.479 60 32 60s-14.51-2.913-19.798-8.202C6.913 46.51 4 39.479 4 32s2.913-14.51 8.202-19.798z"></path>
                        </svg>
                      </div>
                    </div>
                  </>
                )
              })}
            {/* </select> */}
            {profileNumbers?.length > 5 && toggleSlice === false && (
              <div>...</div>
            )}
          </div>
        </div>
        <div className={styles.detailItem}>
          <label className={styles.detailItemTitle} htmlFor="number">
            Phone
          </label>
          <div className={styles.svgDiv}>
            <Number />
          </div>
          <input
            onChange={handleUserChange}
            name="number"
            value={numberInput}
            type="number"
            max={8}
            pattern=".{,8}"
            className={`${styles.invisibleSpinner} ${styles.inputText} `}
          />
        </div>

        <div className={styles.detailItem}>
          <div className={styles.sellerBlock}>
            <div className={styles.detailItemTitle}>Seller</div>
            <div className={styles.svgDiv}>
              <Seller />
            </div>
            <div className={styles.sellers}>
              {vendors.map((v, index) => {
                return (
                  <div key={index}>
                    <label htmlFor={v}>{v}</label>
                    <input
                      onChange={handleUserChange}
                      type="radio"
                      name="seller"
                      value={v}
                      checked={user?.seller === v ? true : false}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className={styles.detailItem}>
          <div className={styles.sellerBlock}>
            <div className={styles.detailItemTitle}>Comunication methods</div>
            <div className={styles.svgDiv}>
              <Comunication />
            </div>
            <div className={styles.sellers}>
              {comunicationsMethod.map((v, index) => {
                return (
                  <div key={index}>
                    <label htmlFor={v}>{v}</label>
                    <input
                      onChange={handleUserChange}
                      type="radio"
                      name="comunicationMethod"
                      value={v}
                      id={v}
                      checked={user?.comunicationMethod === v ? true : false}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail
