import { currency } from "../utils/carUtils"

type Props = { handleState?: (e: any) => void }

const Currency = ({ handleState }: Props) => {
  return (
    <>
      <label htmlFor="currency">Currency</label>
      <select name="currency" id="currency" onChange={handleState}>
        <option value="">--</option>
        {currency.map((r: string, index: number) => {
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

export default Currency
