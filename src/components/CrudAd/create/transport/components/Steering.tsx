type Props = { handleState?: (e: any) => void }

const Steering = ({ handleState }: Props) => {
  const steering: string[] = ["Right", "Left"]

  return (
    <>
      <label htmlFor="steering">Steering</label>
      <select name="steering" id="steering" onChange={handleState}>
        <option value="">--</option>
        {steering.map((s: string, index: number) => {
          return (
            <option key={index} value={s}>
              {s}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default Steering
