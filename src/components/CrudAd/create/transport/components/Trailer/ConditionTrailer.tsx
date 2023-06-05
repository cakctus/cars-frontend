import { trailerCondition } from "../../utils/carUtils"

type Props = {}

const ConditionTrailer = (props: Props) => {
  return (
    <>
      <label htmlFor="condition">Condition</label>
      <select id="condition" name="condition">
        <option value="">---</option>
        {trailerCondition.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  )
}

export default ConditionTrailer
