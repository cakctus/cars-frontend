import { studs } from "../utils/partsUtils"

type Props = {}

const WheelTireStuds = (props: Props) => {
  return (
    <>
      <label htmlFor="boltPattern">Bolt Pattern</label>
      <select id="boltPattern" name="boltPattern">
        <option value="">---</option>
        {studs.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  )
}

export default WheelTireStuds
