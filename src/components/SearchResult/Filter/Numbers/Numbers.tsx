import styles from "./Numbers.module.css"
import Title from "../../Title/Title"
import ArrowDown from "../../../MainPage/SearchForm/SearchBy/ArrowDown"

type Props = {}

const Numbers = (props: Props) => {
  return (
    <div className={styles.searchItem}>
      <div className={styles.labelTitle}>
        <Title title="Car Number" />
      </div>
      <div className={styles.searchInline2}>
        <div className={styles.searchInlineOne}>
          <select className={styles.placeHolderTitle1} name="fuel" id="fuel">
            <option value="moldova">Moldova</option>
            <option value="transnistria">Transnistria</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className={styles.searchInlineTwo}>
          <ArrowDown />
        </div>
      </div>
    </div>
  )
}

export default Numbers
