import { useState } from "react"
// import styles from "../Chat.module.css"
import styles from "../ChatContainer/ChatContainer.module.css"
import SendMsg from "../pics/SendMsg"

type Props = {
  handleSendMsg: any
  handleKeyDown?: any
  handleKeyUp?: any
}

const ChatInput = ({ handleSendMsg, handleKeyDown, handleKeyUp }: Props) => {
  const [msg, setMsg] = useState("")

  const sendChat = (event: any) => {
    event.preventDefault()
    if (msg.length > 0) {
      handleSendMsg(msg)
      setMsg("")
    }
  }

  return (
    <>
      <form
        className={styles.inputContainerMsg}
        onSubmit={(event) => sendChat(event)}
      >
        <div className={styles.textAreaContainer}>
          <textarea
            className={styles.chatInput}
            placeholder="type your message here"
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
          />
        </div>
        <button className={styles.sendMsgSvg} type="submit">
          <SendMsg />
        </button>
      </form>
    </>
  )
}

export default ChatInput
