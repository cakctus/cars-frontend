import { holesNumbers } from "../utils/partsUtils"

type Props = {}

const WheelTireHolesNumber = (props: Props) => {
  return (
    <>
      <input type="holeCount" />
      <select id="holeCount" name="holeCount">
        <option value="">---</option>
        {holesNumbers.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  )
}

export default WheelTireHolesNumber
