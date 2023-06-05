import { ChangeEvent } from "react"
import { useAppDispatch } from "../../../../../redux/store/store"
import { changeState } from "../../../../../redux/slices/ad/transportSlice"

type Props = {
  handleState?: (e: any) => void
}

const Mileage = ({ handleState }: Props) => {
  const dispatch = useAppDispatch()

  const validateNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target
    const value = parseFloat(input.value)
    const name = input.name
    const maxDigits = 6
    const maxKm = 999999

    dispatch(changeState({ name, value }))

    if (!input.validity && value && value.toString().length > maxDigits) {
      input.setCustomValidity(`Maximum ${maxKm} km`)
    } else {
      input.setCustomValidity("")
    }
    input.reportValidity()
  }

  const handleMileage = (e: ChangeEvent<HTMLInputElement>) => {
    validateNumber(e)
    if (handleState) {
      handleState(e)
    }
  }

  return (
    <>
      <label htmlFor="mileage">Mileage</label>
      <input
        type="number"
        name="mileage"
        id="mileage"
        max={999999}
        onInput={handleMileage}
      />
    </>
  )
}

export default Mileage
