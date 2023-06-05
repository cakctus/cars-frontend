import { discDiameter } from "../utils/partsUtils"

const DiscDiameter = () => {
  return (
    <>
      <label htmlFor="diameter">Diameter</label>
      <select id="diameter" name="diameter">
        <option value="">---</option>
        {discDiameter.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  )
}

export default DiscDiameter
