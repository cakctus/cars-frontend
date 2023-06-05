import { truckTransmissionTypes } from "../../utils/carUtils"

type Props = {}

const TruckTransmission = (props: Props) => {
  return (
    <>
      <label htmlFor="transmission">Transmission</label>
      <select name="transmission" id="transmission">
        <option value="">--</option>
        {truckTransmissionTypes.map((t: string, index: number) => {
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

export default TruckTransmission
