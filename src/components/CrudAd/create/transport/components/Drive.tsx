import { drive } from "../utils/carUtils"

type Props = { handleState?: (e: any) => void }

const Drive = ({ handleState }: Props) => {
  return (
    <>
      <label htmlFor="drive">Drive</label>
      <select name="drive" id="drive" onChange={handleState}>
        <option value="">--</option>
        {drive.map((d: string, index: number) => {
          return (
            <option key={index} value={d}>
              {d}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default Drive
