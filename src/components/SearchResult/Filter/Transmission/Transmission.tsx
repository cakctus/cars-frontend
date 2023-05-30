import Title from "../../Title/Title"
import styles from "./Transmission.module.css"

type Props = {}

const Transmission = (props: Props) => {
  return (
    <div className={styles.container}>
      <Title title="Transmission" />
      <div className={styles.vehicle}>
        <div className={styles.vehicleType}>Any</div>
        <div className={styles.change}>change</div>
      </div>
      <hr />
    </div>
  )
}

export default Transmission
