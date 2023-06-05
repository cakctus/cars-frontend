import { ChangeEvent } from "react"
import { useAppDispatch } from "../../../../../redux/store/store"
import { changeState } from "../../../../../redux/slices/ad/transportSlice"
import { years } from "../utils/carUtils"

type Props = {
  handleState?: (e: any) => void
}

const Year = ({ handleState }: Props) => {
  const dispatch = useAppDispatch()

  // const handleYear = (e: ChangeEvent<HTMLSelectElement>) => {
  //   const name = e?.target.name
  //   const value = e?.target.value
  //   dispatch(changeState({ name, value }))
  // }

  // const handle = (e: ChangeEvent<HTMLSelectElement>) => {
  //   if (handleState) {
  //     handleState(e)
  //   }
  // }

  return (
    <>
      <label htmlFor="year">Year</label>
      <select name="year" id="year" onChange={handleState}>
        <option value="">--</option>
        {years.map((y: number, index: number) => {
          return (
            <option key={index} value={y}>
              {y}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default Year
