import { doors } from "../utils/carUtils"

type Props = { handleState?: (e: any) => void }

const Doors = ({ handleState }: Props) => {
  return (
    <>
      <label htmlFor="doors">Doors</label>
      <select name="doors" id="doors" onChange={handleState}>
        <option value="">--</option>
        {doors.map((s: number) => {
          return (
            <option key={s} value={s}>
              {s}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default Doors
