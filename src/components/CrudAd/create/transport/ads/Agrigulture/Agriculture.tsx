import Title from "../../components/Title"
import AgricultureBrands from "../../components/Agriculture/AgricultureBrands"
import Description from "../../components/Description"
import Region from "../../components/Region"
import Price from "../../components/Price"
import Currency from "../../components/Currency"
import TractorCategory from "./TractorCategory"
import Photo from "../../components/Photo"
import Contacts from "../../components/Contacts"

type Props = {}

const Agriculture = (props: Props) => {
  return (
    <>
      <div>
        <Title />
      </div>
      <div>
        <AgricultureBrands />
      </div>
      <div>
        <TractorCategory />
      </div>
      <div>
        <Region />
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
      <div>
        <Photo />
      </div>
      <div>
        <Contacts />
      </div>
    </>
  )
}

export default Agriculture
