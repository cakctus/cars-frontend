import LiImg from "./LiImg"
import styles from "./Leasing.module.css"

type Props = {}

const Leasing = (props: Props) => {
  return (
    <>
      <div className={styles.leasingContainer}>
        <p className={styles.title}>Rethink leasing now.</p>
        <p className={styles.subtitle}>
          With offers for big and small budgets.
        </p>
        <ol>
          <li>
            <LiImg />
            <span className={styles.liText}>
              (Suitable) new cars and young pre-owned ones
            </span>
          </li>
          <li>
            <LiImg />
            <span className={styles.liText}>
              Highly competitive rates and flexible terms
            </span>
          </li>
          <li>
            <LiImg />
            <span className={styles.liText}>
              From certified dealers all across Germany
            </span>
          </li>
        </ol>
        <div className={styles.leasingButtons}>
          <button
            className={`${styles.leasingButton} ${styles.leasingButtonOne}`}
          >
            <span className={styles.liText}>19269 Leasing-Offers</span>
          </button>
          <button
            className={`${styles.leasingButton} ${styles.leasingButtonTwo}`}
          >
            <span className={styles.liText}>Explore more</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Leasing
