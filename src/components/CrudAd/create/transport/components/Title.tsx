import React from "react"

type Props = {}

const Title = (props: Props) => {
  return (
    <>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" />
    </>
  )
}

export default Title
