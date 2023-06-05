import { useState, useEffect, useRef, ChangeEvent } from "react"
import { useGetCountriesQuery } from "../../../../../redux/api/profile/profileApi"
import createAdService from "../../../../../services/ads/create/createAdService"
import styles from "../components/styles/Contacts.module.css"
import axios from "axios"

type Props = {
  handleState?: any
  toggleCommunication?: boolean
  setToggleComunication?: any
  dataToSend?: any
}

const Contacts = ({
  handleState,
  toggleCommunication,
  setToggleComunication,
  dataToSend,
}: Props) => {
  const user: any = localStorage.getItem("user")
  const [number, setNumber] = useState<any | null>(null)
  const [userNumber, setUserNumber] = useState<any | null>(null)
  const [countryCode, setCountryCode] = useState<any>()
  const [userId, setUserId] = useState<any>()
  const [comunicationMethod, setCommunicationMothod] = useState<string>(
    JSON.parse(user).comunicationMethod
  )
  const [myCommunication, setMyComunication] = useState<any>(
    JSON.parse(user).comunicationMethod
  )
  const [addedNumber, setAddedNumber] = useState<string>()
  const { data: countries } = useGetCountriesQuery("")
  // const [toggleCommunication, setToggleComunication] = useState<boolean>(false)

  const input = useRef<any>(null)

  useEffect(() => {
    if (user) {
      setNumber(JSON.parse(user).numbers)
      setUserNumber(JSON.parse(user).number)
      //   setCommunicationMothod(JSON.parse(user).comunicationMethod)
      setUserId(JSON.parse(user).userId)
      setCountryCode(JSON.parse(user).countryCode)
    }
  }, [])

  useEffect(() => {
    // if (comunicationMethod === "chat") {
    //   setCommunicationMothod("phone")
    // } else {
    //   setCommunicationMothod("chat")
    // }

    if (toggleCommunication) {
      setCommunicationMothod("chat")
    } else {
      setCommunicationMothod("phone")
    }
  }, [toggleCommunication])

  const toggleInput = async () => {
    setToggleComunication(!toggleCommunication)
    const inpt = input.current
    if (inpt) {
      inpt.classList.toggle(styles.toggle)
    }
  }

  const sendAd = async () => {
    // const response = await fetch(
    //   "http://localhost:5000/api/profile/update-user-contacts",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ userId, comunicationMethod }),
    //   }
    // )
    const formData = new FormData()
    dataToSend?.photos?.forEach((file: any) => {
      formData.append("files", file.file)
    })
    formData.append("data", JSON.stringify(dataToSend))
    formData.append("communicationMethod", JSON.stringify(comunicationMethod))
    formData.append("number", JSON.stringify(userNumber))
    formData.append("id", JSON.stringify(userId))
    const response = await createAdService.createAd(formData)
    // axios.post(
    //   "http://localhost:5000/api/create/create-ad",
    //   JSON.stringify(formData)
    // )
    // const response = await fetch("http://localhost:5000/api/create/create-ad", {
    //   method: "POST",
    //   body: formData,
    // })
  }

  const addNumberHandle = (e: ChangeEvent<HTMLInputElement>) => {
    if (e) {
      setAddedNumber(e.target.value)
      handleState(e)
    }
  }

  return (
    <>
      <div>
        {number?.length ? (
          <div className={`${toggleCommunication && styles.hiddeNumber}`}>
            <label htmlFor="contacts">Please select the number</label>
            <select name="contacts" id="contacts" onChange={handleState}>
              <option value={userNumber} defaultValue={userNumber}>
                ---
              </option>
              {number?.map((n: any) => {
                return (
                  <option value={n.number} key={n.id}>
                    {n.number}
                  </option>
                )
              })}
            </select>
          </div>
        ) : (
          <div className={`${toggleCommunication && styles.hiddeNumber}`}>
            <div>Please add the number</div>
            <div>
              <select
                className={styles.inputText}
                name="countryCode"
                id="countryCode"
              >
                <option value={countryCode}>{countryCode}</option>
                {countries?.map((code: any, index: number) => {
                  return (
                    <option value={code} key={index}>
                      {code}
                    </option>
                  )
                })}
              </select>
              <input
                type="text"
                name="contacts"
                id="contacts"
                value={addedNumber}
                onChange={addNumberHandle}
              />
            </div>
          </div>
        )}
      </div>
      <div>{comunicationMethod && <div>{comunicationMethod}</div>}</div>
      <div className={styles.toggleContainer}>
        <input
          type="checkbox"
          name="withnumber"
          id="withnumber"
          className={styles.toggleInput}
        />
        <div
          ref={input}
          onClick={toggleInput}
          className={styles.toggleSlider}
        ></div>
        <label htmlFor="withnumber" className={styles.toggleLabel}>
          No phone number
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="chat-bubble"
          width={15}
        >
          <path
            fill="#b2b1ff"
            d="M21 22a.999.999 0 0 1-.707-.293L16.586 18H5a3.003 3.003 0 0 1-3-3V5a3.003 3.003 0 0 1 3-3h14a3.003 3.003 0 0 1 3 3v16a1 1 0 0 1-1 1Z"
          ></path>
        </svg>
      </div>
      <div>
        <button onClick={sendAd}>place the ad</button>
      </div>
    </>
  )
}

export default Contacts
