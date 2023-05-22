import { useState } from "react"
import styles from "../Chat.module.css"

type Props = {
  handleSendMsg: any
  handleKeyDown: any
  handleKeyUp: any
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
      <div className="button-container"></div>
      <form className="input-container" onSubmit={(event) => sendChat(event)}>
        <input
          className={styles.chatInput}
          type="text"
          placeholder="type your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
          onKeyDown={handleKeyDown}
        />
        <button type="submit">send message</button>
      </form>
    </>
  )
}

export default ChatInput
