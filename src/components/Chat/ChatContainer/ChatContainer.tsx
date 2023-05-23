import { useState, useEffect } from "react"
import styles from "./ChatContainer.module.css"
import ChatInput from "../ChatInput/ChatInput"
import {
  useCreateMessageMutation,
  useGetMessageMutation,
} from "../../../redux/api/chat/chatApi"
import ChatImg from "../pics/chat.png"
import axios from "axios"

type Props = {
  myId: number
  user: any
  socket: any
  lastMessages: string
  setLastMessage: (arg: any) => void
}

const ChatContainer = ({
  myId,
  user,
  socket,
  lastMessages,
  setLastMessage,
}: Props) => {
  const [isTyping, setIsTyping] = useState(false)
  const [createMessage] = useCreateMessageMutation()
  const [getMessages] = useGetMessageMutation()
  const [messages, setMessages] = useState<any>([])

  const [arrivalMessage, setArrivalMessage] = useState<any>(null)
  let typingTimeout: any = null

  const handleSendMsg = async (msg: string) => {
    const message = {
      from: myId,
      to: user.id,
      message: msg,
    }
    try {
      createMessage(message)
      console.log(createMessage(message))
      socket.current.emit("send-msg", message)
      console.log(message, "send-msg")
      const msgs = [...messages]
      msgs.push({
        fromSelf: true,
        message: msg,
      })
      setMessages(msgs)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-receive", (msg: any) => {
        console.log(msg, "msg-receive")
        const msgs = [...messages]
        msgs.push({
          fromSelf: false,
          message: msg,
        })
        setMessages(msgs)
        setArrivalMessage({ fromSelf: false, message: msg })
        console.log(messages)
      })
    }
  }, [messages.length])

  useEffect(() => {
    arrivalMessage && setMessages((prev: any) => [...prev, arrivalMessage])
  }, [])

  const getM = async () => {
    const message = {
      from: myId,
      to: user.id,
    }
    const res = await getMessages(message)

    return res
  }

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .post("http://localhost:5000/api/chat/getmsg", {
          from: myId,
          to: user.id,
        })
        .then((res) => {
          setMessages(res.data)
        })
        .catch((error) => console.log(error))
    }

    if (user.email) {
      fetchData()
    }
    // fetchData()
  }, [user])

  useEffect(() => {
    const lastMessages = messages.at(-1)?.message
    if (lastMessages) setLastMessage(lastMessages)
  }, [messages])

  const handleKeyDown = () => {
    setIsTyping(true)
    clearTimeout(typingTimeout)
    typingTimeout = setTimeout(() => {
      setIsTyping(false)
    }, 500) // 5 seconds
  }

  useEffect(() => {
    return () => {
      clearTimeout(typingTimeout)
    }
  }, [])

  const handleKeyUp = () => {
    setIsTyping(false)
  }

  console.log(user)

  return (
    <>
      {user.id ? (
        <div className={styles.chatContainer}>
          <div className={styles.chatHeader}>
            <div className="user-details">
              <h4 className={styles.chatWithTitle}>Chat with {user.email}</h4>
              <div className="avatar">
                {/* <img
                  src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
                  alt=""
                /> */}
              </div>
            </div>
          </div>
          <div className={styles.chatMessages}>
            {messages.map((message: any, index: number) => (
              <div key={index}>
                <div
                  className={`${styles.message} ${
                    message.fromSelf ? styles.sended : styles.received
                  }`}
                >
                  <div className={styles.content}>
                    <p>{message.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.inputContainer}>
            <ChatInput
              handleSendMsg={handleSendMsg}
              handleKeyDown={handleKeyDown}
              handleKeyUp={handleKeyUp}
            />
          </div>
        </div>
      ) : (
        <div className={styles.noChats}>
          <img className={styles.noChatsImg} src={ChatImg} alt="No chats" />
        </div>
      )}
    </>
  )
}

export default ChatContainer
