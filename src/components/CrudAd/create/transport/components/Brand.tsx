import { useState } from "react"
type Props = {
  brands?: any[]
  brand?: string
}

const Brand = ({ brand, brands }: Props) => {
  return (
    <>
      <label htmlFor="brand">Brand</label>
      <select name="brand" id="brand">
        {brands?.map((brand) => {
          return (
            <option value={brand.name} key={brand.id}>
              {brand.name}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default Brand
