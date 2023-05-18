import styles from "./ArticleFour.module.css"
import Img1 from "./bg1.png"
import Img2 from "./bg2.png"

type Props = {}

const ArticleFour = (props: Props) => {
  return (
    <article className={styles.itemTwoContainer}>
      <div className={styles.itemOne}>
        <div className={styles.itemOneContainer}>
          <p className={styles.title}>What do you want to afford?</p>
          <p className={styles.subtitle}>Vehicle financing? We advise you!</p>
          <button
            className={`${styles.leasingButton} ${styles.leasingButtonOne}`}
          >
            <span className={styles.liText}>Calculate now</span>
          </button>
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.imgSize} src={Img1} alt="" />
        </div>
      </div>
      <div className={styles.itemTwo}>
        <div className={styles.itemTwoTexts}>
          <p className={styles.title}>How much is your car worth?</p>
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

export default ArticleFour
