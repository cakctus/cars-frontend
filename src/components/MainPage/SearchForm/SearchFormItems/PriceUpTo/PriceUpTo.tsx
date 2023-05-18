import React from "react"
import styles from "../../SearchForm.module.css"
import ArrowDown from "../../SearchBy/ArrowDown"

type Props = {}

const PriceUpTo = (props: Props) => {
  return (
    <div className={styles.searchItem}>
      <div className={styles.labelTitle}>
        <label htmlFor="prices">Price up to</label>
      </div>
      <div className={styles.searchItem}>
        <div className={styles.searchInline}>
          <div className={styles.searchInlineOne}>
            <input
              className={styles.placeHolderTitle}
              type="text"
              id="price"
              name="price"
              placeholder="Any"
            />
          </div>
          <div className={styles.searchInlineTwo}>
            <ArrowDown />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceUpTo
