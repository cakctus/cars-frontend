import styles from "./SearchResult.module.css"
import Vehicle from "./Filter/Vehicle/Vehicle"
import Location from "./Filter/Sort/Sort"
import Sort from "./Filter/Location/Location"
import VehicleType from "./Filter/VehicleType/VehicleType"
import Price from "./Filter/Price/Price"
import Kilometre from "./Filter/Kilometre/Kilometre"
import Registration from "./Filter/Registration/Registration"
import Fuel from "./Filter/FuelType/Fuel"
import Transmission from "./Filter/Transmission/Transmission"
import Vendor from "./Filter/Vendor/Vendor"
import Numbers from "./Filter/Numbers/Numbers"
import Traction from "./Filter/Traction/Traction"
import EngineCapacity from "./Filter/EngineCapacity/EngineCapacity"
import Body from "./Filter/Body/Body"
import Seats from "./Filter/Seats/Seats"
import Doors from "./Filter/Doors/Doors"
import SearchList from "./SearchListItems/SearchList"

type Props = {}

const SearchResult = (props: Props) => {
  return (
    <>
      <section className={styles.searchContainer}>
        <aside className={styles.searchAside}>
          {/* <div className={styles.searchTitle}>
            <span>Detailed Search</span>
            <hr />
          </div> */}
          <Vehicle />
          <Sort />
          <Numbers />
          <Location />
          <VehicleType />
          <Registration />
          <Fuel />
          <Transmission />
          <Traction />
          <EngineCapacity />
          <Price />
          <Kilometre />
          <Body />
          <Seats />
          <Doors />
          <Vendor />
        </aside>
        <main className={styles.searchMain}>
          <section>
            <SearchList />
          </section>
        </main>
      </section>
    </>
  )
}

export default SearchResult
