import { equipmentCategories } from "../../utils/carUtils"

type Props = {}

const TractorCategory = (props: Props) => {
  return (
    <>
      <label htmlFor="type">Type</label>
      <select id="type" name="type">
        <option value="">---</option>
        {equipmentCategories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  )
}

export default TractorCategory
