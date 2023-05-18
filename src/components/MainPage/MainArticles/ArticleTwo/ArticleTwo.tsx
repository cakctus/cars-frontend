import styles from "./ArticleTwo.module.css"
import Img1 from "./bg1.png"
import Img2 from "./bg2.png"

type Props = {}

const ArticleTwo = (props: Props) => {
  return (
    <article className={styles.itemTwoContainer}>
      <div className={styles.itemOne}>
        <div className={styles.itemOneContainer}>
          <p className={styles.title}>Sell to verified dealers near you</p>
          <p className={styles.subtitle}>Sell successfully in just 24 hours</p>
          <button
            className={`${styles.leasingButton} ${styles.leasingButtonOne}`}
          >
            <span className={styles.liText}>19269 Leasing-Offers</span>
          </button>
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.imgSize} src={Img1} alt="" />
        </div>
      </div>
      <div className={styles.itemTwo}>
        <div>
          <p className={styles.title}>Advertise</p>
          <p className={styles.subtitle}>
            Reach over 14 million potential buyers
          </p>
          <button
            className={`${styles.leasingButton} ${styles.leasingButtonOne}`}
          >
            <span className={styles.liText}>Create an ad</span>
          </button>
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.imgSize} src={Img2} alt="" />
        </div>
      </div>
    </article>
  )
}

export default ArticleTwo
