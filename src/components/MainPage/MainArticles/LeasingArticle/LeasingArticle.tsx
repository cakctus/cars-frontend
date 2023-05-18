import React from "react"
import Leasing from "./Leasing/Leasing"
import MainArticleBg from "./MainArticleBg/MainArticleBg"
import styles from "./LeasingArticle.module.css"
type Props = {}

const LeasingArticle = (props: Props) => {
  return (
    <>
      <article className={styles.mainArticles}>
        <div className={styles.mainArticlesContainer}>
          <Leasing />
          <MainArticleBg />
        </div>
      </article>
    </>
  )
}

export default LeasingArticle
