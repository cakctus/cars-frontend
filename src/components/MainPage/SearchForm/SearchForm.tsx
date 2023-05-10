import React from "react"
import styles from "./SearchForm.module.css"
import Make from "./Make/Make"
import Model from "./Model/Model"
import Registration from "./Registration/Registration"
import FuelType from "./FuelType/FuelType"
import Vendor from "./Vendor/Vendor"
import MileageUpTo from "./MileageUpTo/MileageUpTo"
import PriceUpTo from "./PriceUpTo/PriceUpTo"
import City from "./City/City"
import SearchBy from "./SearchBy/SearchBy"

type Props = {}

const SearchForm = (props: Props) => {
  return (
    <article className={styles.searchForm}>
      <section className={styles.searchBy}>
        <SearchBy />
      </section>
      <section className={styles.search}>
        <div className={styles.searchContainer}>
          <Make />
          <Model />
          <Registration />
          <FuelType />
          <Vendor />
          <MileageUpTo />
          <PriceUpTo />
          <City />
        </div>
      </section>
    </article>
  )
}

export default SearchForm
