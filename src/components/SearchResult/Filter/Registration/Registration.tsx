import { useState, useEffect, useRef } from "react"
import styles from "./Registration.module.css"
import Title from "../../Title/Title"
import ArrowDown from "../../../MainPage/SearchForm/SearchBy/ArrowDown"

type Props = {}

const Registration = (props: Props) => {
  const arrowFromRef = useRef<HTMLDivElement | null>(null)
  const focusSelect = useRef<HTMLSelectElement | null>(null)
  const [showFrom, setShowFrom] = useState<boolean>(true)
  const years = []
  const currentYear = new Date().getFullYear()

  for (var year = currentYear; year >= 1900; year--) {
    years.push(year)
  }

  const handleShowFrom = () => {
    console.log("click")
    setShowFrom((prev) => !prev)

    const element = document.getElementById("priceFrom")
    console.log(element)
    element!.click()

    if (focusSelect.current && showFrom) {
      focusSelect.current.click()
    }
  }

  useEffect(() => {
    const element = document.getElementById("priceFrom")
    if (element) element.click()
    if (showFrom && focusSelect.current) {
      focusSelect.current.click()
    }
  }, [showFrom])

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
              {/* <select
                className={styles.hiddeSelect}
                // style={{
                //   display: showFrom ? "block" : "none",
                // }}
                ref={focusSelect}
                defaultValue={"Any"}
                name="priceFrom"
                id="priceFrom"
              >
                {years.map((year) => {
                  return (
                    <option
                      className={styles.showOption}
                      key={year}
                      value={year}
                    >
                      {year}
                    </option>
                  )
                })}
              </select> */}
            </div>

            {/* <div
              className={styles.searchInlineTwo}
              onClick={handleShowFrom}
              ref={arrowFromRef}
            >
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
                placeholder="to"
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

export default Registration
