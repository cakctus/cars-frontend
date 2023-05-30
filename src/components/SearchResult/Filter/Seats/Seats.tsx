import { useState } from "react"
import Title from "../../Title/Title"
import ArrowDown from "../../../MainPage/SearchForm/SearchBy/ArrowDown"
import styles from "./Seats.module.css"

type Props = {}

const Seats = (props: Props) => {
  const [seatsNumber, setSeatsNumber] = useState<Array<number>>([])
  const seats = [2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div className={styles.searchItem}>
      <div className={styles.labelTitle}>
        <Title title="Seats" />
      </div>
      <div className={styles.searchInline2}>
        <div className={styles.searchInlineOne}>
          <select
            className={styles.placeHolderTitle1}
            name="seatsNumber"
            id="seatsNumber"
          >
            <option value="any">Any</option>
            {seats.map((s) => {
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

export default Seats
