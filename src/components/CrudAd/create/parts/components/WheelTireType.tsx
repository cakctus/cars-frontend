import { wheelsTiresType } from "../utils/partsUtils"

type Props = {}

const WheelTireType = (props: Props) => {
  return (
    <>
      <label htmlFor="type">Type</label>
      <select name="type" id="type" required>
        <option value="">---</option>
        {wheelsTiresType.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  )
}

export default WheelTireType
