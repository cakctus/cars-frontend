import styles from "../ChatContainer/ChatContainer.module.css"

type Props = {}

const SendMsg = (props: Props) => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      // className={styles.sendMsgSvg}
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  )
}

export default SendMsg
