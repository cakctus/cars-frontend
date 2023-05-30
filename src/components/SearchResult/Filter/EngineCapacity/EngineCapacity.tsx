import Title from "../../Title/Title"
import ArrowDown from "../../../MainPage/SearchForm/SearchBy/ArrowDown"
import styles from "./EngineCapacity.module.css"

type Props = {}

const EngineCapacity = (props: Props) => {
  return (
    <div className={styles.container}>
      <Title title="Engine Capacity" />
      <div className={styles.price}>
        <div className={styles.searchItem}>
          <div className={styles.searchInline}>
            <div className={styles.searchInlineOne}>
              <input
                className={styles.placeHolderTitle}
                type="text"
                id="from"
                name="from"
                maxLength={4}
                placeholder="from"
              />
            </div>
            {/* <div className={styles.searchInlineTwo}>
              <ArrowDown />
            </div> */}
          </div>
        </div>
        <div className={styles.searchItem}>
          <div className={styles.searchInline}>
            <div className={styles.searchInlineOne}>
              <input
                className={styles.placeHolderTitle}
                type="text"
                id="from"
                name="from"
                maxLength={4}
                placeholder="up to"
              />
            </div>
            {/* <div className={styles.searchInlineTwo}>
              <ArrowDown />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EngineCapacity
