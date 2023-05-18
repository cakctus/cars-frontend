import React from "react"
import Car from "./leasingBg.png"
import styles from "./MainArticleBg.module.css"

type Props = {}

const MainArticleBg = (props: Props) => {
  return (
    <div className={styles.bgContainer}>
      <img src={Car} alt="Leasing car image" />
    </div>
  )
}

export default MainArticleBg
