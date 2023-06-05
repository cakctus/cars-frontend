import Brand from "../../components/Brand"
import GeneralModel from "../../components/GeneralModel"
import Registration from "../../components/Registration"
import Condition from "../../components/Condition"
import Region from "../../components/Region"
import Description from "../../components/Description"
import Price from "../../components/Price"
import Currency from "../../components/Currency"
import MotoType from "../../components/Moto/MotoType"
import Year from "../../components/Year"
import EngineVolume from "../../components/EngineVolume"
import EnginePower from "../../components/EnginePower"
import Mileage from "../../components/Mileage"
import MileageType from "../../components/MileageType"
import MotoTransmission from "../../components/Moto/MotoTransmission"
import Photo from "../../components/Photo"
import Contacts from "../../components/Contacts"

type Props = {}

const Moto = (props: Props) => {
  return (
    <>
      <div>
        <Brand />
      </div>
      <div>
        <GeneralModel />
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
        <MotoType />
      </div>
      <div>
        <EngineVolume />
      </div>
      <div>
        <EnginePower />
      </div>
      <div>
        <Mileage />
      </div>
      <div>
        <MileageType />
      </div>
      <div>
        <MotoTransmission />
      </div>
      <hr />
      <div>
        <Condition />
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

export default Moto
