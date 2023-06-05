import { ChangeEvent } from "react"
import { useAppDispatch } from "../../../../../redux/store/store"
import { changeState } from "../../../../../redux/slices/ad/transportSlice"
import { mileageType } from "../utils/carUtils"

type Props = {
  handleState?: (e: any) => void
}

const MileageType = ({ handleState }: Props) => {
  const dispatch = useAppDispatch()

  return (
    <>
      <label htmlFor="mileageType">Mileage Type</label>
      <select name="mileageType" id="mileageType" onChange={handleState}>
        <option value="">--</option>
        {mileageType.map((m: string, index: number) => {
          return (
            <option key={index} value={m}>
              {m}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default MileageType
