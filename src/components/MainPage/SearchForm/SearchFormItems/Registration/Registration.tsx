import React from "react"
import styles from "../../SearchForm.module.css"
import ArrowDown from "../../SearchBy/ArrowDown"

type Props = {}

const Registration = (props: Props) => {
  return (
    <>
      <div className={styles.searchItem}>
        <div className={styles.labelTitle}>
          <label htmlFor="from">1st registration</label>
        </div>
        <div className={styles.searchInline}>
          <div className={styles.searchInlineOne}>
            <input
              className={styles.placeHolderTitle}
              type="text"
              id="from"
              name="from"
              maxLength={4}
              placeholder="Any"
            />
          </div>
          <div className={styles.searchInlineTwo}>
            <ArrowDown />
          </div>
        </div>
      </div>
      <div className={styles.searchItem}>
        <div className={styles.labelTitle}>
          <label htmlFor="from">Last registration</label>
        </div>
        <div className={styles.searchInline}>
          <div className={styles.searchInlineOne}>
            <input
              className={styles.placeHolderTitle}
              type="text"
              id="from"
              name="from"
              maxLength={4}
              placeholder="Any"
            />
          </div>
          <div className={styles.searchInlineTwo}>
            <ArrowDown />
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration
