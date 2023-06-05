import { agricultureBrands } from "../../utils/carUtils"

type Props = {}

const AgricultureBrands = (props: Props) => {
  return (
    <>
      <label htmlFor="manufacturer">Manufacturer</label>
      <select id="manufacturer" name="manufacturer" className="">
        <option className="manufacturer" value="">
          ---
        </option>
        {agricultureBrands.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </>
  )
}

export default AgricultureBrands
