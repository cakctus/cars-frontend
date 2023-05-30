import Title from "../../Title/Title"
import ArrowDown from "../../../MainPage/SearchForm/SearchBy/ArrowDown"
import styles from "./Body.module.css"
import React from "react"

type Props = {}

const Body = (props: Props) => {
  return (
    <div className={styles.searchItem}>
      <div className={styles.labelTitle}>
        <Title title="Body Type" />
      </div>
      <div className={styles.searchInline2}>
        <div className={styles.searchInlineOne}>
          <select className={styles.placeHolderTitle1} name="fuel" id="fuel">
            <option value="any">Any</option>
            <option value="rear">Sedan</option>
            <option value="wagon">Wagon/Estate</option>
            <option value="van">Van</option>
            <option value="convertible">Convertible</option>
            <option value="sportcar">Sports Car</option>
            <option value="pickup">Pickup truck</option>
            <option value="suv">SUV</option>
            <option value="hatchback">Hatchback</option>
            <option value="otherbody">Other</option>
          </select>
        </div>
        <div className={styles.searchInlineTwo}>
          <ArrowDown />
        </div>
      </div>
    </div>
  )
}

export default Body
