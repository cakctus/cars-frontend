import styles from "../../SearchForm.module.css"
import ArrowDown from "../../SearchBy/ArrowDown"

type Props = {}

const Make = (props: Props) => {
  return (
    <div className={styles.searchItem}>
      <div className={styles.labelTitle}>
        <label htmlFor="make">Make</label>
      </div>
      <div className={styles.searchInline}>
        <div className={styles.searchInlineOne}>
          <select className={styles.placeHolderTitle} name="make" id="make">
            <option value="any">Any</option>
            <optgroup label="Top makes">
              <option>Audi</option>
              <option>BMW</option>
              <option>Mercedes-Benz</option>
              <option>Volkswagen</option>
            </optgroup>
            <optgroup label="All makes">
              <option>Abarth</option>
              <option>AC</option>
              <option>Acura</option>
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

export default Make
