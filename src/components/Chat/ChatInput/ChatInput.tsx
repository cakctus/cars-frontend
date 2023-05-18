import { useState } from "react"
import Picker, { EmojiStyle, Theme } from "emoji-picker-react"
import styles from "../Chat.module.css"

type Props = {
  handleSendMsg: any
}

const ChatInput = ({ handleSendMsg }: Props) => {
  const [msg, setMsg] = useState("")
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)

  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker)
  }

  const handleEmojiClick = (emojiObject: any) => {
    let message = msg
    message += " " + emojiObject.emoji
    setMsg(message)
  }

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
        />
        <button type="submit">send message</button>
      </form>
    </>
  )
}

export default ChatInput
