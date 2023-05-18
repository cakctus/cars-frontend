import styles from "./SearchForm.module.css"
import Make from "./SearchFormItems/Make/Make"
import Model from "./SearchFormItems/Model/Model"
import Registration from "./SearchFormItems/Registration/Registration"
import FuelType from "./SearchFormItems/FuelType/FuelType"
import Vendor from "./SearchFormItems/Vendor/Vendor"
import MileageUpTo from "./SearchFormItems/MileageUpTo/MileageUpTo"
import PriceUpTo from "./SearchFormItems/PriceUpTo/PriceUpTo"
import City from "./SearchFormItems/City/City"
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
