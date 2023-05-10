import React from "react"
import styles from "../SearchForm.module.css"
import CarImg from "../CarImg"
import MotoImg from "../MotoImg"
import BusImg from "../BusImg"
import TruckImg from "../TruckImg"

type Props = {}

const SearchBy = (props: Props) => {
  return (
    <>
      <div className={styles.searchByCar}>
        <CarImg />
      </div>
      <div className={styles.searchByMoto}>
        <MotoImg />
      </div>
      <div className={styles.searchByBus}>
        <BusImg />
      </div>
      <div className={styles.searchByTruck}>
        <TruckImg />
      </div>
    </>
  )
}

export default SearchBy
