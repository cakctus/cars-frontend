import React from "react"
import styles from "../SearchForm.module.css"
import ArrowDown from "../ArrowDown"

type Props = {}

const MileageUpTo = (props: Props) => {
  return (
    <div className={styles.searchItem}>
      <div className={styles.labelTitle}>
        <label htmlFor="miles">Mileage up to</label>
      </div>
      <div className={styles.searchInline}>
        <div className={styles.searchInlineOne}>
          <input
            className={styles.placeHolderTitle}
            type="text"
            id="miles"
            name="miles"
            placeholder="Any"
          />
        </div>
        <div className={styles.searchInlineTwo}>
          <ArrowDown />
        </div>
      </div>
    </div>
  )
}

export default MileageUpTo
