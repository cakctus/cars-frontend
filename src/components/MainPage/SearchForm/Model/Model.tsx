import React from "react"
import styles from "../SearchForm.module.css"
import ArrowDown from "../ArrowDown"

type Props = {}

const Model = (props: Props) => {
  return (
    <div className={styles.searchItem}>
      <div className={styles.labelTitle}>
        <label htmlFor="make">Model</label>
      </div>
      <div className={styles.searchInline}>
        <div className={styles.searchInlineOne}>
          <select className={styles.placeHolderTitle} name="make" id="make">
            <optgroup label="5 Series">
              <option>5 Seriall (All)</option>
              <option>518</option>
              <option>520</option>
              <option>520 Grand Turismo</option>
            </optgroup>
            <optgroup label="7 series">
              <option>7 Series (All)</option>
              <option>725</option>
              <option>728</option>
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

export default Model
