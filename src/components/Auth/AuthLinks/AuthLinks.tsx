import styles from "../Auth.module.css"

type Props = {
  index: number
  item: any
  title: any
  handleTitle: (index: any) => void
}

const AuthLinks = ({ index, item, title, handleTitle }: Props) => {
  return (
    <div
      className={`${styles.titleItem} ${
        title !== index ? styles.titleItemInactive : styles.titleItemActive
      } `}
      style={{
        borderTopLeftRadius: index === 0 ? "10px" : "0",
        borderTopRightRadius: index === 1 ? "10px" : "0",
      }}
      onClick={() => handleTitle(index)}
    >
      {item}
    </div>
  )
}

export default AuthLinks
