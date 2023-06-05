import { wheelsTiresPurpose } from "../utils/partsUtils"

type Props = {}

const WheelTirePurpose = (props: Props) => {
  return (
    <>
      <label htmlFor="purpose">Purpose</label>
      <select id="purpose" name="792">
        <option value="">---</option>
        {wheelsTiresPurpose.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  )
}

export default WheelTirePurpose
