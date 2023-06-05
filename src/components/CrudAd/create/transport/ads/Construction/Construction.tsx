import React from "react"
import Title from "../../components/Title"
import Description from "../../components/Description"
import Region from "../../components/Region"
import Price from "../../components/Price"
import Currency from "../../components/Currency"
import ConstructionType from "../../components/Construction/ConstructionType"
import ConstructionCondition from "../../components/Construction/ConstructionCondition"
import Photo from "../../components/Photo"
import Contacts from "../../components/Contacts"

type Props = {}

const Construction = (props: Props) => {
  return (
    <>
      <div>
        <Title />
      </div>
      <div>
        <ConstructionCondition />
      </div>
      <div>
        <Region />
      </div>
      <hr />
      <div>
        <ConstructionType />
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

export default Construction
