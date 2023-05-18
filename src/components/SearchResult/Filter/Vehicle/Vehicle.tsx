import styles from "./Vehicle.module.css"
import Title from "../../Title/Title"

type Props = {}

const Vehicle = (props: Props) => {
  return (
    <div className={styles.container}>
      <Title title="Vehicle condition" />
      <div className={styles.vehicle}>
        <div className={styles.vehicleType}>Used</div>
        <div className={styles.change}>change</div>
      </div>
      <hr />
    </div>
  )
}

export default Vehicle
