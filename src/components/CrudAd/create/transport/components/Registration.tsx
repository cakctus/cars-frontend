import { registration } from "../utils/carUtils"

type Props = {
  handleState?: (e: any) => void
}

const Registration = ({ handleState }: Props) => {
  return (
    <>
      <label htmlFor="registration">Registration</label>
      <select name="registration" id="registration" onChange={handleState}>
        <option value="">--</option>
        {registration.map((r: string, index: number) => {
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

export default Registration
