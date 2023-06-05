import { bodyType } from "../utils/carUtils"

type Props = { handleState?: (e: any) => void }

const BodyType = ({ handleState }: Props) => {
  return (
    <>
      <label htmlFor="bodyType">Body Type</label>
      <select name="bodyType" id="bodyType" onChange={handleState}>
        <option value="">--</option>
        {bodyType.map((b: string, index: number) => {
          return (
            <option key={index} value={b}>
              {b}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default BodyType
