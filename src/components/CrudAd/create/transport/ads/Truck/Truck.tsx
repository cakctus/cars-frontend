import Brand from "../../components/Brand"
import Model from "../../components/Truck/TruckModel"
import Registration from "../../components/Registration"
import Condition from "../../components/Condition"
import Description from "../../components/Description"
import Region from "../../components/Region"
import Price from "../../components/Price"
import Currency from "../../components/Currency"
import Steering from "../../components/Steering"
import FuelType from "../../components/FuelType"
import TruckBodyType from "../../components/Truck/truckBodyType"
import CabineType from "../../components/Truck/CabineType"
import DriveTruck from "../../components/Truck/driveTruck"
import TruckTransmission from "../../components/Truck/TruckTransmission"
import Mileage from "../../components/Mileage"
import MileageType from "../../components/MileageType"
import Load from "../../components/Truck/Load"
import LoadCapacity from "../../components/Truck/LoadCapacity"
import TotalWeight from "../../components/Truck/TotalWeight"
import Photo from "../../components/Photo"
import Contacts from "../../components/Contacts"
import Year from "../../components/Year"
import EngineVolume from "../../components/EngineVolume"

type Props = {}

const Truck = (props: Props) => {
  return (
    <>
      <div>
        <Brand />
      </div>
      <div>
        <Model />
      </div>
      <div>
        <Year />
      </div>
      <div>
        <Registration />
      </div>
      <div>
        <Region />
      </div>
      <hr />

      <div>
        <FuelType />
      </div>
      <div>
        <TruckTransmission />
      </div>
      <div>
        <TruckBodyType />
      </div>
      <div>
        <CabineType />
      </div>
      <div>
        <EngineVolume />
      </div>
      <div>
        <Mileage />
      </div>
      <div>
        <MileageType />
      </div>
      <div>
        <DriveTruck />
      </div>
      <div>
        <Load />
      </div>
      <div>
        <LoadCapacity />
      </div>
      <div>
        <TotalWeight />
      </div>

      <hr />

      <div>
        <Condition />
      </div>
      <div>
        <Steering />
      </div>

      <hr />

      <div>
        <Price />
      </div>
      <div>
        <Currency />
      </div>

      <hr />

      <div>
        <Description />
      </div>

      <hr />
      <div>
        <Photo />
      </div>
      <div>
        <Contacts />
      </div>
    </>
  )
}

export default Truck
