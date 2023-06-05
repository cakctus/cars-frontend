import { useState, ChangeEvent, useEffect } from "react"
import Model from "../../components/Model"
import Registration from "../../components/Registration"
import Condition from "../../components/Condition"
import Description from "../../components/Description"
import Region from "../../components/Region"
import Price from "../../components/Price"
import Currency from "../../components/Currency"
import Author from "../../components/Author"
import Year from "../../components/Year"
import Seat from "../../components/Seats"
import Steering from "../../components/Steering"
import BodyType from "../../components/BodyType"
import Doors from "../../components/Doors"
import Mileage from "../../components/Mileage"
import MileageType from "../../components/MileageType"
import EngineVolume from "../../components/EngineVolume"
import EnginePower from "../../components/EnginePower"
import FuelType from "../../components/FuelType"
import Transmission from "../../components/Transmission"
import Drive from "../../components/Drive"
import Photo from "../../components/Photo"
import Contacts from "../../components/Contacts"
import CarBrand from "../../components/CarBrand"
import CarGeneration from "../../components/Car/CarGeneration"
import {
  useGetCarBrandsQuery,
  useGetCarModelsQuery,
  useGetCarGenerationQuery,
  useGetCarModificationQuery,
  useGetCarModificationDetailQuery,
} from "../../../../../../redux/api/ads/car/carAdApi"
import CarModification from "../../components/Car/CarModification"
import { useAppSelector } from "../../../../../../redux/store/store"
import { useAppDispatch } from "../../../../../../redux/store/store"
import { changeState } from "../../../../../../redux/slices/ad/transportSlice"
import useCreateAd from "../../../../../../hooks/useCreateAd"

type Props = {}

const Car = (props: Props) => {
  // const [car, setCar] = useState({})
  const [modelId, setModelId] = useState()
  const [generationId, setGenerationId] = useState()
  const [modificationId, setModificationId] = useState()
  const [skipModels, setSkipModels] = useState(true)
  const [skipGenerations, setSkipGenerations] = useState(true)
  const [skipModifications, setSkipModifications] = useState(true)
  const [toggleCommunication, setToggleComunication] = useState<any>(false)
  const [car, setCar] = useCreateAd(toggleCommunication)

  const { data: carsBrands } = useGetCarBrandsQuery("")
  const { data: carsModels } = useGetCarModelsQuery(modelId, {
    skip: skipModels,
  })
  const { data: carsGeneration } = useGetCarGenerationQuery(generationId, {
    skip: skipGenerations,
  })
  const { data: carsModification } = useGetCarModificationQuery(
    modificationId,
    { skip: skipModifications }
  )
  // const { data: carsModificationDetail } = useGetCarModificationDetailQuery(
  //   modificationId,
  //   { skip: skipModifications }
  // )
  const carState = useAppSelector((state) => state.transport)
  const dispatch = useAppDispatch()

  const handleState = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e?.target.name
    const value = e?.target.value

    setCar((prev: any) => ({
      ...prev,
      [name]: value,
    }))
    // dispatch(changeState({ name, value }))
  }

  // useEffect(() => {
  //   // if (toggleCommunication) {
  //   //   setCar((prev: any) => ({
  //   //     ...prev,
  //   //     contacts: 1,
  //   //   }))
  //   // }

  //   const userDto = localStorage.getItem("user")

  //   if (userDto) {
  //     const data = JSON.parse(userDto)

  //     const { number } = data

  //     if (!number) {
  //       setCar((prev: any) => {
  //         return {
  //           ...prev,
  //           contacts: null,
  //         }
  //       })
  //     }
  //   }

  //   setCar((prev: any) => {
  //     if (toggleCommunication) {
  //       return {
  //         ...prev,
  //         contacts: 1,
  //       }
  //     } else {
  //       const { contacts, ...rest } = prev
  //       return {
  //         ...rest,
  //       }
  //     }
  //   })
  // }, [toggleCommunication])

  // console.log(carState, "carState")
  console.log(car, "car")
  // console.log(toggleCommunication, "toggleCommunication")

  return (
    <>
      <div>
        <CarBrand
          brands={carsBrands}
          setModelId={setModelId}
          setSkipModels={setSkipModels}
          setCar={setCar}
        />
      </div>
      <div>
        <Model
          models={carsModels}
          modelId={modelId}
          setGenerationId={setGenerationId}
          setSkipGenerations={setSkipGenerations}
          setCar={setCar}
        />
      </div>
      <div>
        <CarGeneration
          generations={carsGeneration}
          setModificationId={setModificationId}
          generationId={generationId}
          setSkipModifications={setSkipModifications}
          setCar={setCar}
        />
      </div>
      <div>
        <CarModification
          modifications={carsModification}
          modificationId={modificationId}
          setCar={setCar}
        />
      </div>
      <div>
        <Year handleState={handleState} />
      </div>
      <div>
        <Mileage handleState={handleState} />
      </div>
      <div>
        <MileageType handleState={handleState} />
      </div>
      <div>
        <Registration handleState={handleState} />
      </div>
      <div>
        <Region handleState={handleState} />
      </div>
      <hr />

      <div>
        <Doors handleState={handleState} />
      </div>
      <div>
        <BodyType handleState={handleState} />
      </div>
      <div>
        <FuelType handleState={handleState} />
      </div>
      <div>
        <Transmission handleState={handleState} />
      </div>
      <div>
        <EngineVolume handleState={handleState} />
      </div>
      <div>
        <EnginePower handleState={handleState} />
      </div>
      <hr />

      <div>
        <Condition handleState={handleState} />
      </div>
      <div>
        <Steering handleState={handleState} />
      </div>
      <div>
        <Seat handleState={handleState} />
      </div>
      <div>
        <Drive handleState={handleState} />
      </div>

      <hr />

      <div>
        <Author handleState={handleState} />
      </div>
      <div>
        <Price handleState={handleState} />
      </div>
      <div>
        <Currency handleState={handleState} />
      </div>

      <hr />

      <div>
        <Description handleState={handleState} />
      </div>
      <hr />

      <div>
        <Photo setCar={setCar} />
      </div>
      <div>
        <Contacts
          handleState={handleState}
          toggleCommunication={toggleCommunication}
          setToggleComunication={setToggleComunication}
          dataToSend={car}
        />
      </div>
    </>
  )
}

export default Car
