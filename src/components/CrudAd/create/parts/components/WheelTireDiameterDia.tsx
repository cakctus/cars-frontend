import { diameterDia } from "../utils/partsUtils"

type Props = {}

const WheelTireDiameterDia = (props: Props) => {
  return (
    <>
      <label htmlFor="diameterDia">Bolt Pattern</label>
      <select id="diameterDia" name="diameterDia">
        <option value="">---</option>
        {diameterDia.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  )
}

export default WheelTireDiameterDia
