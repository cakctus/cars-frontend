import { truckTotalWeight } from "../../utils/carUtils"

type Props = {}

const TotalWeight = (props: Props) => {
  return (
    <>
      <label htmlFor="totalWeight">Total Weight</label>
      <select name="totalWeight" id="totalWeight">
        <option value="">--</option>
        {truckTotalWeight.map((d: string, index: number) => {
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

export default TotalWeight
