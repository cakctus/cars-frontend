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

type Props = {
  user?: any
  setUser?: any
  onUserChange?: (updatedUser: any) => void
}

const Detail = ({ onUserChange }: Props) => {
  const { data: countries } = useGetCountriesQuery("")
  const [updateUser, { isLoading }] = useUpdateUserMutation()
  const [userInput, setUserInput] = useState<any>()
  const [user, setUser] = useState<any>(
    JSON.parse(localStorage.getItem("user") || "{}")
  )
  const [userPhoto, setUserPhoto] = useState<any>(null)
  const [profilePhoto, setProfilePhoto] = useState<any>(null)
  const [file, setFile] = useState<any>(null)
  const [photo, setPhoto] = useState<any>(null)
  const [pphoto, setPPhoto] = useState<any>(null)
  const vendors = ["private", "dealer", "official dealer"]
  const comunicationsMethod = ["phone", "chat"]
  const fileInput = useRef<any>(null)

  useEffect(() => {
    setUserInput(user)

    if (user?.userPhoto.length > 0) {
      setUserPhoto(
        `http://localhost:5000/media/profile/users/${user?.userPhoto}`
      )
    } else if (photo) {
      setUserPhoto(photo)
    } else {
      setUserPhoto("http://localhost:5000/media/profile/default/default.webp")
    }

    if (user?.userProfilePhoto.length > 0) {
      setProfilePhoto(
        `http://localhost:5000/media/profile/users/${user?.userProfilePhoto}`
      )
    } else if (pphoto) {
      setProfilePhoto(pphoto)
    }
  }, [user, photo, pphoto])

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
    const value = e.target.value
    const name = e.target.name
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

  const handleUpdatePhoto = async () => {
    const data = new FormData()
    data.append("userPhoto", user?.userPhoto)
    data.append("userProfilePhoto", user?.userProfilePhoto)
    data.append("userId", user?.userId)
    data.append("body", JSON.stringify(user))
    await fetch("http://localhost:5000/api/profile/user-dto", {
      method: "POST",
      body: data,
    })
  }

  return (
    <>
      <Header
        t={"user"}
        userPhoto={userPhoto}
        profilePhoto={profilePhoto}
        userInput={userInput}
        updateUser={updateUser}
        handleUserChange={handleUserChange}
      />
      <div className={styles.detail}>
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
            <svg
              style={{ display: photo ? "block" : "none" }}
              className={styles.updatePhoto}
              onClick={handleUpdatePhoto}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="refresh"
              width={20}
            >
              <path
                fill="#1e1f24"
                d="M22 12a9 9 0 0 1-9 9 1 1 0 0 1 0-2 7 7 0 1 0-6.81-8.61l.1-.1A1 1 0 0 1 7.7 11.7l-2 2a1 1 0 0 1-1.41 0l-2-2a1 1 0 0 1 1.41-1.41l.4.4A9 9 0 0 1 22 12Z"
                data-name="REFRESH"
              ></path>
            </svg>
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
          <label className={styles.detailItemTitle} htmlFor="username">
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
        <div className={styles.detailItem}>
          <label className={styles.detailItemTitle} htmlFor="username">
            Phone
          </label>
          <div className={styles.svgDiv}>
            <Number />
          </div>
          <input
            onChange={handleUserChange}
            name="number"
            value={user?.number}
            type="number"
            max={8}
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
