import styles from "./VehicleType.module.css"
import Title from "../../Title/Title"

type Props = {}

const VehicleType = (props: Props) => {
  return (
    <div className={styles.container}>
      <Title title="Make, Model, Version" />
      <div className={styles.vehicle}>
        <div className={styles.vehicleType}>BMW 530</div>
        <div className={styles.change}>change</div>
      </div>
      <hr />
    </div>
  )
}

export default VehicleType
