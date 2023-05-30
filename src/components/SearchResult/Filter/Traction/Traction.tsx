import Title from "../../Title/Title"
import ArrowDown from "../../../MainPage/SearchForm/SearchBy/ArrowDown"
import styles from "./Traction.module.css"

type Props = {}

const Traction = (props: Props) => {
  return (
    <div className={styles.searchItemFuel}>
      <div className={styles.labelTitle}>
        <Title title="Traction" />
      </div>
      <div className={styles.searchInline2}>
        <div className={styles.searchInlineOne}>
          <select className={styles.placeHolderTitle1} name="fuel" id="fuel">
            <option value="any">Any</option>
            <option value="rear">Rear</option>
            <option value="front">Front</option>
            <option value="4x4">4x4 </option>
          </select>
        </div>
        <div className={styles.searchInlineTwo}>
          <ArrowDown />
        </div>
      </div>
    </div>
  )
}

export default Traction
