type Props = { handleState?: (e: any) => void }

const Price = ({ handleState }: Props) => {
  return (
    <>
      <label htmlFor="price">Price</label>
      <input type="text" id="price" name="price" onChange={handleState} />
    </>
  )
}

export default Price
