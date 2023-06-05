import { motorcycleTypes } from "../../utils/carUtils"
type Props = {}

const MotoType = (props: Props) => {
  return (
    <>
      <label htmlFor="motorcycleType">Motorcycle Type</label>
      <select name="motorcycleType" id="motorcycleType">
        <option value="">--</option>
        {motorcycleTypes.map((b: string, index: number) => {
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

export default MotoType
