import styles from "./Sort.module.css"
import Title from "../../Title/Title"
import ArrowDown from "../../../MainPage/SearchForm/SearchBy/ArrowDown"

type Props = {}

const Location = (props: Props) => {
  return (
    <div className={styles.searchItem}>
      <div className={styles.labelTitle}>
        <Title title="Sort" />
      </div>
      <div className={styles.searchInline2}>
        <div className={styles.searchInlineOne}>
          <select className={styles.placeHolderTitle1} name="fuel" id="fuel">
            <option value="low">Price (lowest)</option>
            <option value="high">Price (highest)</option>
            <option value="older">First registration (oldest)</option>
            <option value="newest">First registration (newest)</option>
          </select>
        </div>
        <div className={styles.searchInlineTwo}>
          <ArrowDown />
        </div>
      </div>
    </div>
  )
}

export default Location
