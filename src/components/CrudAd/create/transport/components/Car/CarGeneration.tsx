import { ChangeEvent } from "react"
import { useAppDispatch } from "../../../../../../redux/store/store"
import { changeState } from "../../../../../../redux/slices/ad/transportSlice"

type Props = {
  generations?: any
  setModificationId?: any
  generationId?: any
  setSkipModifications?: any
  setCar?: any
}

const CarGeneration = ({
  generations,
  setModificationId,
  generationId,
  setSkipModifications,
  setCar,
}: Props) => {
  const dispatch = useAppDispatch()

  const handleGeneration = (e: ChangeEvent<HTMLSelectElement>) => {
    const name = e?.target.name
    const value = e?.target.value
    const generation = generations.find((g: any) => g.id === Number(value))
    if (generation) {
      setModificationId(generation.id)
      setSkipModifications(false)
      dispatch(changeState({ name, value: generation.name }))
    }
    setCar((prev: any) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <>
      <label htmlFor="generation">Generation</label>
      <select
        name="generation"
        id="generation"
        onChange={handleGeneration}
        disabled={generationId ? false : true}
      >
        {generations?.map((generation: any) => {
          return (
            <option value={generation.id} key={generation.id}>
              {generation.name}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default CarGeneration
