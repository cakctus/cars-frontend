import { contructionTypes } from "../../utils/carUtils"

type Props = {}

const ConstructionType = (props: Props) => {
  return (
    <>
      <label htmlFor="type">Type</label>
      <select id="type" name="type">
        <option value="">---</option>
        {contructionTypes.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  )
}

export default ConstructionType
