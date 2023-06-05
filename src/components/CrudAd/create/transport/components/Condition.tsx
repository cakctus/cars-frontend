import { condition } from "../utils/carUtils"

type Props = { handleState?: (e: any) => void }

const Condition = ({ handleState }: Props) => {
  return (
    <>
      <label htmlFor="condition">Condition</label>
      <select name="condition" id="condition" onChange={handleState}>
        <option value="">--</option>
        {condition.map((r: string, index: number) => {
          return (
            <option key={index} value={r}>
              {r}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default Condition
