import { truckLoadCapacity } from "../../utils/carUtils"

type Props = {}

const LoadCapacity = (props: Props) => {
  return (
    <>
      <select name="loadCapacityType" id="loadCapacityType">
        <option value="">--</option>
        {truckLoadCapacity.map((m: string, index: number) => {
          return (
            <option key={index} value={m}>
              {m}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default LoadCapacity
