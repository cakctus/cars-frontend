import React from "react"
import Title from "../../components/Title"
import Description from "../../components/Description"
import Region from "../../components/Region"
import Price from "../../components/Price"
import Currency from "../../components/Currency"
import TrailerCategory from "../../components/Trailer/TrailerCategory"
import Year from "../../components/Year"
import ConditionTrailer from "../../components/Trailer/ConditionTrailer"
import Photo from "../../components/Photo"
import Contacts from "../../components/Contacts"
import ConstructionType from "../../components/Construction/ConstructionType"

type Props = {}

const Trailer = (props: Props) => {
  return (
    <>
      <div>
        <Title />
      </div>
      <div>
        <TrailerCategory />
      </div>
      <div>
        <ConditionTrailer />
      </div>

      <div>
        <Year />
      </div>
      <hr />
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
        <Photo />
      </div>
      <div>
        <Contacts />
      </div>
    </>
  )
}

export default Trailer
