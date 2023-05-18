import styles from "./Location.module.css"
import Title from "../../Title/Title"

type Props = {}

const Location = (props: Props) => {
  return (
    <div className={styles.container}>
      <Title title="Location" />
      <div className={styles.vehicle}>
        <div className={styles.vehicleType}>Used</div>
        <div className={styles.change}>change</div>
      </div>
      <hr />
    </div>
  )
}

export default Location
