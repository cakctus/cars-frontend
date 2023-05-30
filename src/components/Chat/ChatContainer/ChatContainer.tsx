import { useState, useEffect, useRef } from "react"
import styles from "./ChatContainer.module.css"
import ChatInput from "../ChatInput/ChatInput"
import {
  useCreateMessageMutation,
  useGetMessageMutation,
} from "../../../redux/api/chat/chatApi"
import ChatImg from "../pics/chat.png"
import { emailReplace } from "../../../util/emailReplace"
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

  const messageDiv = useRef<HTMLDivElement | null>(null)
  const chatButtomDiv = useRef<HTMLDivElement | null>(null)
  const buttomDiv = useRef<HTMLDivElement | null>(null)
  const [isBottom, setIsBottom] = useState<boolean>(false)
  const [fetching, setFetching] = useState<boolean>(false)

  const [arrivalMessage, setArrivalMessage] = useState<any>(null)
  let typingTimeout: any = null

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
  }, [user])

  const handleSendMsg = async (msg: string) => {
    const message = {
      from: myId,
      to: user.id,
      message: msg,
    }
    createMessage(message)
    try {
      const now = new Date()
      socket.current.emit("send-msg", message)
      const msgs = [...messages]
      msgs.push({
        fromSelf: true,
        message: msg,
        createdAt: now.toISOString(),
      })
      setMessages(msgs)
      axios
        .get(`http://localhost:5000/api/chat/chat-unread/${myId}/${user.id}`)
        .then(
          (response) => {
            // console.log(response)
          },
          (error) => {
            // console.log(error)
          }
        )
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (messageDiv.current) {
      messageDiv.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      })
    }

    if (socket.current) {
      const data = new Date()
      socket.current.on("msg-receive", (msg: any) => {
        console.log(msg, "msg-receive")
        const msgs = [...messages]
        msgs.push({
          fromSelf: false,
          message: msg,
          createdAt: data.toISOString(),
        })
        setMessages(msgs)
        setArrivalMessage({
          fromSelf: false,
          message: msg,
          createdAt: data.toISOString(),
        })
      })
    }
  }, [messages.length])

  useEffect(() => {
    arrivalMessage && setMessages((prev: any) => [...prev, arrivalMessage])
  }, [])

  // const getM = async () => {
  //   const message = {
  //     from: myId,
  //     to: user.id,
  //   }
  //   const res = await getMessages(message)
  //   console.log(res)
  //   return res
  // }

  // useEffect(() => {
  //   getM()
  // }, [])

  // useEffect(() => {
  //   const lastMessages = messages.at(-1)?.message
  //   if (lastMessages) setLastMessage(lastMessages)
  // }, [messages])

  // const handleKeyDown = () => {
  //   setIsTyping(true)
  //   clearTimeout(typingTimeout)
  //   typingTimeout = setTimeout(() => {
  //     setIsTyping(false)
  //   }, 500) // 5 seconds
  // }

  // useEffect(() => {
  //   return () => {
  //     clearTimeout(typingTimeout)
  //   }
  // }, [])

  // const handleKeyUp = () => {
  //   setIsTyping(false)
  // }

  // console.log(user)

  const groupedMessages = messages.reduce((grouped: any, message: any) => {
    const messageDate = new Date(message.createdAt).toLocaleDateString()
    if (!grouped[messageDate]) {
      grouped[messageDate] = []
    }
    grouped[messageDate].push(message)
    return grouped
  }, {})

  useEffect(() => {
    const handleScroll2 = () => {
      const element = messageDiv.current

      if (element) {
        const { scrollTop, scrollHeight, offsetHeight, clientHeight } = element
        console.log(scrollTop + offsetHeight, scrollHeight)
        if (scrollTop + clientHeight >= scrollHeight) {
          axios
            .get(
              `http://localhost:5000/api/chat/chat-is-read/${myId}/${user.id}`
            )
            .then(
              (response) => {
                console.log(response)
              },
              (error) => {
                console.log(error)
              }
            )
          console.log("Element is at the bottom")
        }
      }
    }

    if (messageDiv.current) {
      messageDiv.current.addEventListener("scroll", handleScroll2)
    }

    return () => {
      if (messageDiv.current) {
        messageDiv.current.removeEventListener("scroll", handleScroll2)
      }
    }
  }, [])

  // useEffect(() => {
  //   if (fetching) {
  //     axios
  //       .get(`http://localhost:5000/api/chat/chat-is-read/${myId}/${user.id}`)
  //       .then(
  //         (response) => {
  //           console.log(response)
  //         },
  //         (error) => {
  //           console.log(error)
  //         }
  //       )
  //       .finally(() => setFetching(false))
  //   }
  // }, [fetching])

  // function scrollHandler(e: any) {
  //   console.log("scroll")

  //   if (buttomDiv.current) {
  //     if (
  //       buttomDiv!.current!.clientHeight + buttomDiv!.current!.scrollTop + 5 >=
  //       buttomDiv!.current!.scrollHeight
  //     ) {
  //       console.log("is bottom")
  //       setFetching(true)
  //     }
  //   }
  // }

  return (
    <>
      {user.id ? (
        <div className={styles.chatContainer} ref={buttomDiv}>
          <div className={styles.chatHeader}>
            <div className={styles.chatTitle}>
              <h4 className={styles.chatWithTitle}>
                Chat with {emailReplace(user?.email)}
              </h4>
              <div className="avatar">
                {/* <img
                  src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
                  alt=""
                /> */}
              </div>
            </div>
          </div>
          <div className={styles.chatMessages} ref={messageDiv}>
            {/* {messages.map((message: any, index: number) => (
              <div key={index} ref={messageDiv}>
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
            ))} */}
            <div>
              {Object.entries(groupedMessages).map(
                ([day, messages]: [any, any]) => (
                  <div ref={chatButtomDiv} key={day}>
                    <h3 className={styles.messageDay}>{day}</h3>

                    {messages.map((message: any, index: number) => (
                      <div
                        key={index}
                        className={`${styles.message} ${
                          message.fromSelf ? styles.sended : styles.received
                        }`}
                      >
                        <div className={styles.content}>
                          <p>{message.message}</p> <span>{message.id}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
          <div className={styles.inputContainer}>
            <ChatInput
              handleSendMsg={handleSendMsg}
              // handleKeyDown={handleKeyDown}
              // handleKeyUp={handleKeyUp}
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
