import { discType } from "../utils/partsUtils"

type Props = {}

const WheelTireDisc = (props: Props) => {
  return (
    <>
      <label htmlFor="type">Disc Type</label>
      <select id="type" name="type">
        <option value="">---</option>
        {discType.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  )
}

export default WheelTireDisc
