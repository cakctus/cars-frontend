import styles from "./Registration.module.css"
import Title from "../../Title/Title"
import ArrowDown from "../../../MainPage/SearchForm/SearchBy/ArrowDown"

type Props = {}

const Registration = (props: Props) => {
  return (
    <div className={styles.container}>
      <Title title="First registration (date)" />
      <div className={styles.registration}>
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

export default Registration
