import { transmission } from "../utils/carUtils"

type Props = { handleState?: (e: any) => void }

const Transmission = ({ handleState }: Props) => {
  return (
    <>
      <label htmlFor="transmission">Transmission</label>
      <select name="transmission" id="transmission" onChange={handleState}>
        <option value="">--</option>
        {transmission.map((t: string, index: number) => {
          return (
            <option key={index} value={t}>
              {t}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default Transmission
