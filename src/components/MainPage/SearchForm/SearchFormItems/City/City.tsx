import React from "react"
import styles from "../../SearchForm.module.css"
import ArrowDown from "../../SearchBy/ArrowDown"

type Props = {}

const City = (props: Props) => {
  return (
    <div className={styles.searchItem}>
      <div className={styles.labelTitle}>
        <label htmlFor="city">City</label>
      </div>
      <div className={styles.searchInline}>
        <div className={styles.searchInlineOne}>
          <select className={styles.placeHolderTitle} name="city" id="city">
            <option value="any">Any</option>
            <optgroup label="Municipalities">
              <option>Chisinau</option>
              <option>Balti</option>
            </optgroup>
            <optgroup label="Districts">
              <option>Anenii Noi</option>
              <option>Briceni</option>
              <option>Cahul</option>
            </optgroup>
          </select>
        </div>
        <div className={styles.searchInlineTwo}>
          <ArrowDown />
        </div>
      </div>
    </div>
  )
}

export default City
