import React from "react"
import styles from "../SearchForm.module.css"
import ArrowDown from "../ArrowDown"

type Props = {}

const Vendor = (props: Props) => {
  return (
    <div className={styles.searchItem}>
      <div className={styles.labelTitle}>
        <label htmlFor="vendor">Vendor</label>
      </div>
      <div className={styles.searchInline}>
        <div className={styles.searchInlineOne}>
          <select className={styles.placeHolderTitle} name="vendor" id="vendor">
            <option value="any">Any</option>
            <option value="any">Private seller</option>
            <option value="any">Dealer</option>
            <option value="any">Official Dealer</option>
          </select>
        </div>
        <div className={styles.searchInlineTwo}>
          <ArrowDown />
        </div>
      </div>
    </div>
  )
}

export default Vendor
