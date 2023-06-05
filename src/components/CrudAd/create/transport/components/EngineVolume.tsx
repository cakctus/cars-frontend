import { ChangeEvent } from "react"

type Props = { handleState?: (e: any) => void }

const EngineVolume = ({ handleState }: Props) => {
  const validateEngineVolme = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target
    const value = parseFloat(input.value)
    const maxDigits = 5

    console.log(input.validity)

    if (!input.validity && value && value.toString().length > maxDigits) {
      input.setCustomValidity(`Maximum ${maxDigits} digits`)
    } else {
      input.setCustomValidity("")
    }
    input.reportValidity()
  }

  const handle = (e: ChangeEvent<HTMLInputElement>) => {
    validateEngineVolme(e)
    if (handleState) {
      handleState(e)
    }
  }

  return (
    <>
      <label htmlFor="engineVolume">Engine Volume cm&sup3;</label>
      <input
        type="number"
        name="engineVolume"
        id="engineVolume"
        max={5}
        onInput={handle}
      />
    </>
  )
}

export default EngineVolume
