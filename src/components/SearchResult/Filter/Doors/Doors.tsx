import { useState } from "react"
import Title from "../../Title/Title"
import ArrowDown from "../../../MainPage/SearchForm/SearchBy/ArrowDown"
import styles from "./Doors.module.css"

type Props = {}

const Doors = (props: Props) => {
  const [seatsNumber, setSeatsNumber] = useState<Array<number>>([])
  const doors = [2, 3, 4, 5]
  return (
    <div className={styles.searchItem}>
      <div className={styles.labelTitle}>
        <Title title="Doors" />
      </div>
      <div className={styles.searchInline2}>
        <div className={styles.searchInlineOne}>
          <select
            className={styles.placeHolderTitle1}
            name="seatsNumber"
            id="seatsNumber"
          >
            <option value="any">Any</option>
            {doors.map((s: number) => {
              return (
                <option key={s} value={s}>
                  {s}
                </option>
              )
            })}
          </select>
        </div>
        <div className={styles.searchInlineTwo}>
          <ArrowDown />
        </div>
      </div>
    </div>
  )
}

export default Doors
