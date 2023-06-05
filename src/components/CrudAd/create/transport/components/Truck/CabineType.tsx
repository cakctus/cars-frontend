import { cabTruck } from "../../utils/carUtils"
type Props = {}

const CabineType = (props: Props) => {
  return (
    <>
      <label htmlFor="cabinType">Cabin Type</label>
      <select name="cabinType" id="cabinType">
        <option value="">--</option>
        {cabTruck.map((b: string, index: number) => {
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

export default CabineType
