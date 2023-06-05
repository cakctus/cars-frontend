import React from "react"

type Props = {}

const BusModel = (props: Props) => {
  return (
    <>
      <label htmlFor="model">Model</label>
      <input type="text" id="model" name="model" />
    </>
  )
}

export default BusModel
