import { trailerTypes } from "../../utils/carUtils"

type Props = {}

const TrailerCategory = (props: Props) => {
  return (
    <>
      <label htmlFor="type">Type</label>
      <select id="type" name="type">
        <option value="">---</option>
        {trailerTypes.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  )
}

export default TrailerCategory
