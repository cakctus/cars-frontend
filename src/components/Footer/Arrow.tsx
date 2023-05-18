import React from "react"
import styles from "./Footer.module.css"

type Props = {}

const Arrow = (props: Props) => {
  return (
    <svg
      className={styles.arrow}
      viewBox="0 0 33 34"
      focusable="false"
      aria-hidden="true"
      width={35}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 14h10l-5 5-5-5z"></path>
    </svg>
  )
}

export default Arrow
