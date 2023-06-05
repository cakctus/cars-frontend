import { contructionCondition } from "../../utils/carUtils"

type Props = {}

const ConstructionCondition = (props: Props) => {
  return (
    <>
      <label htmlFor="condition">Condition</label>
      <select id="condition" name="condition">
        <option value="">---</option>
        {contructionCondition.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  )
}

export default ConstructionCondition
