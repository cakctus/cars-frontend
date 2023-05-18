import styles from "./Main.module.css"
import SearchForm from "./SearchForm/SearchForm"
import MainBg from "./MainBg/MainBg"
import MainArticles from "./MainArticles/MainArticles"

type Props = {}

const MainPage = (props: Props) => {
  return (
    <>
      <MainBg />
      <div className={styles.main}>
        <main className={styles.mainContainer}>
          <SearchForm />
          <MainArticles />
        </main>
      </div>
    </>
  )
}

export default MainPage
