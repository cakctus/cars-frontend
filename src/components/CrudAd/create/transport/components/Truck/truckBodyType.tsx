import { tBodyType } from "../../utils/carUtils"
type Props = {}

const TruckBodyType = (props: Props) => {
  return (
    <>
      <label htmlFor="bodyType">Body Type</label>
      <select name="bodyType" id="bodyType">
        <option value="">--</option>
        {tBodyType.map((b: string, index: number) => {
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

export default TruckBodyType
