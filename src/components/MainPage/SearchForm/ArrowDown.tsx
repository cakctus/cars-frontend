import React from "react"
import styles from "./SearchForm.module.css"

type Props = {}

const ArrowDown = (props: Props) => {
  return (
    <svg
      className="arrowDown"
      viewBox="0 0 33 34"
      focusable="false"
      aria-hidden="true"
      width={35}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 14h10l-5 5-5-5z" fill="currentColor"></path>
    </svg>
  )
}

export default ArrowDown
