type Props = { handleState?: (e: any) => void }

const EnginePower = ({ handleState }: Props) => {
  return (
    <>
      <label htmlFor="enginPower">Engine Power</label>
      <input
        type="number"
        name="enginPower"
        id="enginPower"
        onChange={handleState}
      />
    </>
  )
}

export default EnginePower
