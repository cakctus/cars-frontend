import React from "react"

type Props = {}

const TruckModel = (props: Props) => {
  return (
    <>
      <label htmlFor="model">Model</label>
      <input type="text" id="model" name="model" />
    </>
  )
}

export default TruckModel
