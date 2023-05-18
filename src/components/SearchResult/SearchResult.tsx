import styles from "./SearchResult.module.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Vehicle from "./Filter/Vehicle/Vehicle"
import VehicleType from "./Filter/VehicleType/VehicleType"
import Price from "./Filter/Price/Price"
import Kilometre from "./Filter/Kilometre/Kilometre"
import Registration from "./Filter/Registration/Registration"
import Location from "./Filter/Location/Location"
import FuelType from "../MainPage/SearchForm/SearchFormItems/FuelType/FuelType"

type Props = {}

const SearchResult = (props: Props) => {
  return (
    <>
      <Header />
      <section className={styles.searchContainer}>
        <aside className={styles.searchAside}>
          <div className={styles.searchTitle}>
            <span>Detailed Search</span>
            <hr />
          </div>
          <Vehicle />
          <VehicleType />
          <Price />
          <Registration />
          <Kilometre />
          <Location />
          <FuelType />
        </aside>
        <main className={styles.searchMain}>
          <section>section title</section>
          <section> cars list </section>
        </main>
      </section>
      <Footer />
    </>
  )
}

export default SearchResult
