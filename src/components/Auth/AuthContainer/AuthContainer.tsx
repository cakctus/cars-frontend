import styles from "../Auth.module.css"

type Props = {
  index: number
  title: any
  item: any
}

const AuthContainer = ({ index, title, item }: Props) => {
  return (
    <div
      className={styles.formContainer}
      style={{ display: title === index ? "block" : "none" }}
    >
      <div className={styles.formItem}>{item}</div>
    </div>
  )
}

export default AuthContainer
