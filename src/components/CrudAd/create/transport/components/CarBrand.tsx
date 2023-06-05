import { useState, useEffect, ChangeEvent } from "react"
import { useAppDispatch } from "../../../../../redux/store/store"
import { changeState } from "../../../../../redux/slices/ad/transportSlice"

type Props = {
  brands?: any[]
  setModelId?: any
  setCar?: any
  setSkipModels?: any
}

const CarBrand = ({ brands, setModelId, setSkipModels, setCar }: Props) => {
  const [selectedBrand, setSelectedBrand] = useState<string>("")
  const [pBrands, setPBrand] = useState<any>([])
  const popularBrand = [
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Volkswagen",
    "Opel",
    "Skoda",
    "Renault",
    "Peugeot",
    "Toyota",
    "Lexus",
    "Honda",
    "Mazda",
    "Mitsubishi",
    "Nissan",
    "Hyundai",
    "Kia",
    "Volvo",
  ]
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (brands) {
      //   const match = brands.filter((brand) => popularBrand.includes(brand.name))
      const match = popularBrand.reduce((result, popular) => {
        const brand = brands.find((brand) => brand.name === popular)
        if (brand) {
          //@ts-ignore
          result.push(brand)
        }
        return result
      }, [])
      setPBrand((prev: any) => [...prev, match])
    }
  }, [brands])

  const handleItem = (id: any, brandName: any) => {
    setModelId(id)
    setSelectedBrand(brandName)
    setSkipModels(false)
    const name = "brand"
    const value = brandName
    setCar((prev: any) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleBrand = (e?: ChangeEvent<HTMLSelectElement>) => {
    if (e) {
      const name = e?.target.name
      const value = e?.target.value
      const modelId = brands?.filter((brand) => brand.name === value)[0]
      setModelId(modelId?.id)
      dispatch(changeState({ name, value }))
      setSelectedBrand(e?.target.value)
      setCar((prev: any) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  return (
    <>
      <div>
        {pBrands[0]?.map((brand: any) => {
          return (
            <div
              key={brand?.id}
              onClick={() => handleItem(brand?.id, brand?.name)}
            >
              {brand?.name}
            </div>
          )
        })}
      </div>
      <label htmlFor="brand">Brand</label>
      <select
        name="brand"
        id="brand"
        value={selectedBrand}
        onChange={handleBrand}
      >
        {brands?.map((brand) => {
          return (
            <option value={brand?.name} key={brand?.id}>
              {brand?.name}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default CarBrand
