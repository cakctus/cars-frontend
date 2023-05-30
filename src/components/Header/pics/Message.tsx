import styles from "../Header.module.css"

type Props = {
  handleMessage?: any
}

const Message = ({ handleMessage }: Props) => {
  return (
    <div className={styles.nofocus}>
      <svg
        onClick={handleMessage}
        className={styles.svgCover}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        focusable="false"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        color="rgb( 90,94,102 )"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.501 14h-8.5l-4 4v-4L2.5 14a1.5 1.5 0 01-1.5-1.5V3.5a1.5 1.5 0 011.5-1.5h14a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5zm3-8h2a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5h-1.5v4l-4-4h-5.5a1.5 1.5 0 01-1.5-1.5v-1h7.5a3 3 0 003-3V6z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  )
}

export default Message
