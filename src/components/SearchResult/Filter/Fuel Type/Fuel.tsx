import styles from "./Fuel.module.css"
import Title from "../../Title/Title"

type Props = {}

const Fuel = (props: Props) => {
  return (
    <div className={styles.container}>
      <Title title="Fuel Type" />
      <div className={styles.vehicle}>
        <div className={styles.vehicleType}>Diesel</div>
        <div className={styles.change}>change</div>
      </div>
      <hr />
    </div>
  )
}

export default Fuel
