import { discBrands } from "../utils/partsUtils"

type Props = {}

const WheelTireDiscBrands = (props: Props) => {
  return (
    <>
      <input type="brand" />
      <select id="brand" name="brand">
        <option value="">---</option>
        {discBrands.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  )
}

export default WheelTireDiscBrands
