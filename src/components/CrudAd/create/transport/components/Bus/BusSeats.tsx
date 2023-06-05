type Props = {}

const BusSeats = (props: Props) => {
  return (
    <>
      <label htmlFor="seats">Seats</label>
      <input type="number" name="seats" id="seats" />
    </>
  )
}

export default BusSeats
