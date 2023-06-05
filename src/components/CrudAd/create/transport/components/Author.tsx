import { author } from "../utils/carUtils"

type Props = { handleState?: (e: any) => void }

const Author = ({ handleState }: Props) => {
  return (
    <>
      <label htmlFor="author">Author</label>
      <select name="author" id="author" onChange={handleState}>
        <option value="">--</option>
        {author.map((a: string, index: number) => {
          return (
            <option key={index} value={a}>
              {a}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default Author
