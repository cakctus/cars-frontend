import { truckDrive } from "../../utils/carUtils"

type Props = {}

const DriveTruck = (props: Props) => {
  return (
    <>
      <label htmlFor="drive">Drive</label>
      <select name="drive" id="drive">
        <option value="">--</option>
        {truckDrive.map((d: string, index: number) => {
          return (
            <option key={index} value={d}>
              {d}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default DriveTruck
