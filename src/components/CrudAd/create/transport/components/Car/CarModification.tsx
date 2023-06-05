import { ChangeEvent } from "react"
import { useAppDispatch } from "../../../../../../redux/store/store"
import { changeState } from "../../../../../../redux/slices/ad/transportSlice"

type Props = {
  modifications?: any
  modificationId?: any
  setCar?: any
}

const CarModification = ({ modifications, modificationId, setCar }: Props) => {
  const dispatch = useAppDispatch()

  const handleModification = (e: ChangeEvent<HTMLSelectElement>) => {
    const name = e?.target.name
    const value = e?.target.value
    const modification = modifications.find((m: any) => m.id === Number(value))
    if (modification) {
      dispatch(changeState({ name, value: modification.name }))
    }
    setCar((prev: any) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <>
      <label htmlFor="modification">Modification</label>
      <select
        name="modification"
        id="modification"
        onChange={handleModification}
        disabled={modificationId ? false : true}
      >
        {modifications?.map((modification: any) => {
          return (
            <option value={modification.id} key={modification.id}>
              {modification.name}
              {modification?.start_prod} -{modification?.end_prod}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default CarModification
