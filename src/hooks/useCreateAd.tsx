import { useState, useEffect } from "react"

type Props = {
  toggleCommunication?: any
}

const useCreateAd = ({ toggleCommunication }: Props) => {
  const [ad, setAd] = useState<any>({})
  const [number, setNumber] = useState<any>()

  useEffect(() => {
    const userDto = localStorage.getItem("user")
    if (userDto) {
      const data = JSON.parse(userDto)
      const { number } = data
      setNumber(number)
    }
  }, [])

  useEffect(() => {
    // if (number === "null" || (null && toggleCommunication === false)) {
    // setAd((prev: any) => {
    //   if (!prev.contacts && !number) {
    //     return {
    //       ...prev,
    //       contacts: false,
    //     }
    //   }
    // })
    // }

    console.log(number)

    setAd((prev: any) => {
      if (toggleCommunication) {
        return {
          ...prev,
          contacts: number,
        }
      } else {
        const { contacts, ...rest } = prev
        return {
          ...rest,
        }
      }
    })
  }, [toggleCommunication])

  return [ad, setAd]
}

export default useCreateAd
