import { useState } from "react"
import Modal from "../Modal/Modal"
import Detail from "../Svg/Detail"
import Fuel from "../Svg/Fuel"
import Mileage from "../Svg/Mileage"
import Location from "../Svg/Location"
import Transmision from "../Svg/Transmision"
import styles from "../SearchList.module.css"

type Props = {
  item?: any
}

const SearchListItem = ({ item }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <article className={styles.searchItem}>
      <section className={styles.blockPhoto}>
        <img
          className={styles.photoItem}
          src={item.blockPhoto[0]}
          draggable="false"
          alt=""
        />
      </section>
      <section className={styles.blockInfo}>
        <h2 className={styles.blockInfoTitle}>
          {item.blockDetail.brand} {item.blockDetail.model}
          {item.blockDetail.year}
        </h2>
        <ul className={styles.blockInfoDetail}>
          <li className={styles.blockInfoLi}>
            <Mileage /> <span>{item.blockDetail.mileage}</span>
          </li>
          <li className={styles.blockInfoLi}>
            <Location /> <span>{item.blockDetail.location}</span>
          </li>
          <li className={styles.blockInfoLi}>
            <Transmision />
            <span>{item.blockDetail.transmission}</span>
          </li>
          <li className={styles.blockInfoLi}>
            <Fuel /> <span>{item.blockDetail.fuel}</span>
          </li>
        </ul>
        <div onClick={openModal} className={styles.blockInfoDetailModal}>
          <Detail />
          <span className={styles.detailText}>Detail</span>
        </div>
        <Modal showModal={showModal} closeModal={closeModal} item={item} />
      </section>
      <section className={styles.blockPrice}>
        <h2 className={styles.blockInfoTitle}>
          {item.blockPrice.price} <span>&euro;</span>
        </h2>
      </section>
    </article>
  )
}

export default SearchListItem
