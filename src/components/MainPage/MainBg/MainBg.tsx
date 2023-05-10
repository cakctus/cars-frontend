import React from "react"
import styles from "./MainBg.module.css"
import MainPic from "../../../pics/main_pic.jpg"

type Props = {}

const MainBg = (props: Props) => {
  return (
    <div className={styles.mainBg}>
      <img className={styles.introImg} src={MainPic} alt="Intro picture" />
    </div>
  )
}

export default MainBg
