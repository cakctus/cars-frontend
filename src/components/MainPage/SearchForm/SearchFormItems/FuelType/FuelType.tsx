import styles from "../../SearchForm.module.css"
import ArrowDown from "../../SearchBy/ArrowDown"

type Props = {}

const FuelType = (props: Props) => {
  return (
    <div className={styles.searchItem}>
      <div className={styles.labelTitle}>
        <label htmlFor="fuelType">Fuel type</label>
      </div>
      <div className={styles.searchInline}>
        <div className={styles.searchInlineOne}>
          <select
            className={styles.placeHolderTitle}
            name="fuelType"
            id="fuelType"
          >
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

export default FuelType
