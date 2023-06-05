type Props = { handleState?: (e: any) => void }

const Description = ({ handleState }: Props) => {
  return (
    <>
      <label htmlFor="description">Description</label>
      <textarea
        onChange={handleState}
        id="description"
        name="description"
        rows={5}
        cols={33}
      ></textarea>
    </>
  )
}

export default Description
