import styles from "./Kilometre.module.css"
import Title from "../../Title/Title"
import ArrowDown from "../../../MainPage/SearchForm/SearchBy/ArrowDown"

type Props = {}

const Kilometre = (props: Props) => {
  return (
    <div className={styles.container}>
      <Title title="Kilometre" />
      <div className={styles.kilometre}>
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
            <div className={styles.searchInlineTwo}>
              <ArrowDown />
            </div>
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
                placeholder="to"
              />
            </div>
            <div className={styles.searchInlineTwo}>
              <ArrowDown />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Kilometre
