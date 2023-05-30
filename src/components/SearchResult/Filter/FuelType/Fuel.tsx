import styles from "./Fuel.module.css"
import ArrowDown from "../../../MainPage/SearchForm/SearchBy/ArrowDown"
import Title from "../../Title/Title"

type Props = {}

const Fuel = (props: Props) => {
  return (
    <div className={styles.searchItemFuel}>
      <div className={styles.labelTitle}>
        <Title title="Fuel type" />
      </div>
      <div className={styles.searchInline2}>
        <div className={styles.searchInlineOne}>
          <select className={styles.placeHolderTitle1} name="fuel" id="fuel">
            <option value="any">Any</option>
            <option value="any">Petrol</option>
            <option value="any">Diesel</option>
            <option value="any">Gas / Petrol (propane)</option>
            <option value="any">Gas / Gasoline (methane)</option>
            <option value="any">Hybrid</option>
            <option value="any">Plug-in hybrid</option>
            <option value="any">Electric car</option>
          </select>
        </div>
        <div className={styles.searchInlineTwo}>
          <ArrowDown />
        </div>
      </div>
    </div>
  )
}

export default Fuel
