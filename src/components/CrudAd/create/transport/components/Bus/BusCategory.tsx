import { busCategory } from "../../utils/carUtils"

type Props = {}

const BusCategory = (props: Props) => {
  return (
    <>
      <label htmlFor="category">Category</label>
      <select name="category" id="category">
        <option value="">--</option>
        {busCategory.map((b: string, index: number) => {
          return (
            <option key={index} value={b}>
              {b}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default BusCategory
