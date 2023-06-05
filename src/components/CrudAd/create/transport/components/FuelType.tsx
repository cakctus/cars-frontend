import { fuelType } from "../utils/carUtils"

type Props = { handleState?: (e: any) => void }

const FuelType = ({ handleState }: Props) => {
  return (
    <>
      <label htmlFor="fuelType">Fuel Type</label>
      <select name="fuelType" id="fuelType" onChange={handleState}>
        <option value="">--</option>
        {fuelType.map((f: string, index: number) => {
          return (
            <option key={index} value={f}>
              {f}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default FuelType
