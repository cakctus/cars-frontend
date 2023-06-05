import { busBodyType } from "../../utils/carUtils"

type Props = {}

const BusBodyType = (props: Props) => {
  return (
    <>
      <label htmlFor="bodyType">Body Type</label>
      <select name="bodyType" id="bodyType">
        <option value="">--</option>
        {busBodyType.map((b: string, index: number) => {
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

export default BusBodyType
