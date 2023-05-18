import styles from "./Title.module.css"

type Props = {
  title: string
}

const Title = (props: Props) => {
  return (
    <div className={styles.searchTitle}>
      <span>{props.title}</span>
    </div>
  )
}

export default Title
