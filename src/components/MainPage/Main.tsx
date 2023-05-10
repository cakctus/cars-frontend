import React from "react"
import styles from "./Main.module.css"
import MainPic from "../../pics/main_pic.jpg"
import SearchForm from "./SearchForm/SearchForm"
import MainBg from "./MainBg/MainBg"

type Props = {}

const MainPage = (props: Props) => {
  return (
    <>
      <MainBg />
      <div className={styles.main}>
        <main className={styles.mainContainer}>
          <SearchForm />
        </main>
      </div>
    </>
  )
}

export default MainPage
