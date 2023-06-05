import { ChangeEvent } from "react"
import { useAppDispatch } from "../../../../../redux/store/store"
import { changeState } from "../../../../../redux/slices/ad/transportSlice"

type Props = {
  models?: any
  modelId?: any
  setGenerationId?: any
  setSkipGenerations?: any
  setCar?: any
}

const Model = ({
  models,
  modelId,
  setGenerationId,
  setSkipGenerations,
  setCar,
}: Props) => {
  const dispatch = useAppDispatch()

  const handleModel = (e: ChangeEvent<HTMLSelectElement>) => {
    const name = e?.target.name
    const value = e?.target.value
    const model = models.find((m: any) => m.id === Number(value))
    if (model) {
      setGenerationId(model.id)
      setSkipGenerations(false)
      dispatch(changeState({ name, value: model.name }))
    }
    setCar((prev: any) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <>
      <label htmlFor="model">Model</label>
      <select
        name="model"
        id="model"
        onChange={handleModel}
        disabled={modelId ? false : true}
      >
        {models?.map((model: any) => {
          return (
            <option value={model.id} key={model.id}>
              {model.name}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default Model
