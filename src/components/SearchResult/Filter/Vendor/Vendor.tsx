import Title from "../../Title/Title"
import styles from "./Vendor.module.css"

type Props = {}

const Vendor = (props: Props) => {
  return (
    <div className={styles.container}>
      <Title title="Vendor" />
      <div className={styles.vendorBlock}>
        <div className={styles.vendorItem}>
          <input
            className={styles.inputVendor}
            type="radio"
            name="vendor"
            id="any"
          />
          <label className={styles.vendorItemLabel} htmlFor="any">
            Any
          </label>
        </div>
        <div className={styles.vendorItem}>
          <input
            className={styles.inputVendor}
            type="radio"
            name="vendor"
            id="private"
          />
          <label className={styles.vendorItemLabel} htmlFor="private">
            Private
          </label>
        </div>
        <div className={styles.vendorItem}>
          <input
            className={styles.inputVendor}
            type="radio"
            name="vendor"
            id="dealer"
          />
          <label className={styles.vendorItemLabel} htmlFor="dealer">
            Dealer
          </label>
        </div>
        <div className={styles.vendorItem}>
          <input
            className={styles.inputVendor}
            type="radio"
            name="vendor"
            id="offdealer"
          />
          <label className={styles.vendorItemLabel} htmlFor="offdealer">
            Official Dealer
          </label>
        </div>
      </div>
    </div>
  )
}

export default Vendor
