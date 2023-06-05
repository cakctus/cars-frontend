import Brand from "../../components/Brand"
import Model from "../../components/Bus/BusModel"
import Registration from "../../components/Registration"
import Condition from "../../components/Condition"
import Description from "../../components/Description"
import Region from "../../components/Region"
import Price from "../../components/Price"
import Currency from "../../components/Currency"
import Steering from "../../components/Steering"
import FuelType from "../../components/FuelType"
import Transmission from "../../components/Transmission"
import BusBodyType from "../../components/Bus/BusBodyType"
import BusCategory from "../../components/Bus/BusCategory"
import Year from "../../components/Year"
import EngineVolume from "../../components/EngineVolume"
import BusSeats from "../../components/Bus/BusSeats"
import Mileage from "../../components/Mileage"
import MileageType from "../../components/MileageType"
import Drive from "../../components/Drive"
import Photo from "../../components/Photo"
import Contacts from "../../components/Contacts"

type Props = {}

const Bus = (props: Props) => {
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
        <Mileage />
      </div>
      <div>
        <MileageType />
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
        <Transmission />
      </div>
      <div>
        <BusBodyType />
      </div>
      <div>
        <BusCategory />
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

      <hr />

      <div>
        <Condition />
      </div>
      <div>
        <Steering />
      </div>
      <div>
        <BusSeats />
      </div>
      <div>
        <Drive />
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

export default Bus
