import { motorcycleTransmission } from "../../utils/carUtils"
type Props = {}

const MotoTransmission = (props: Props) => {
  return (
    <>
      <label htmlFor="transmission">Transmission</label>
      <select name="transmission" id="transmission">
        <option value="">--</option>
        {motorcycleTransmission.map((t: string, index: number) => {
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

export default MotoTransmission
