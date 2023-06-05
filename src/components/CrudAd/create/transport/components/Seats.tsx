import { seats } from "../utils/carUtils"

type Props = { handleState?: (e: any) => void }

const Seat = ({ handleState }: Props) => {
  return (
    <>
      <label htmlFor="seats">Seats</label>
      <select name="seats" id="seats" onChange={handleState}>
        <option value="">--</option>
        {seats.map((s: number) => {
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

export default Seat
