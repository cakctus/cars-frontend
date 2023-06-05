import { regions } from "../utils/carUtils"

type Props = {
  handleState?: (e: any) => void
}

const Region = ({ handleState }: Props) => {
  return (
    <>
      <label htmlFor="region">Region</label>
      <select name="region" id="region" onChange={handleState}>
        <option value="">--</option>
        {Object.entries(regions).map(([group, options]) => (
          <optgroup key={group} label={group}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </>
  )
}

export default Region
