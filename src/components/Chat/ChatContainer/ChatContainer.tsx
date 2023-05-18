import { useState, useEffect } from "react"
import styles from "./ChatContainer.module.css"
import ChatInput from "../ChatInput/ChatInput"
import {
  useCreateMessageMutation,
  useGetMessageMutation,
} from "../../../redux/api/chat/chatApi"
import axios from "axios"

type Props = {
  myId: number
  user: any
}

const ChatContainer = ({ myId, user }: Props) => {
  const [createMessage] = useCreateMessageMutation()
  const [getMessages] = useGetMessageMutation()
  const [messages, setMessages] = useState<any>([])

  const handleSendMsg = async (msg: string) => {
    const message = {
      from: myId,
      to: user.id,
      message: msg,
    }
    try {
      createMessage(message)
    } catch (error) {
      console.log(error)
    }
  }

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
        .then((res) => setMessages(res.data))
        .catch((error) => console.log(error))
    }

    fetchData()
  }, [user])

  console.log(messages)

  console.log({
    from: myId,
    to: user.id,
  })

  return (
    <div>
      <h3>Chat with {user.email}</h3>
      <div className="chat-header">
        <div className="user-details">
          <div className="avatar">
            {/* <img
              src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
              alt=""
            /> */}
          </div>
        </div>
      </div>
      <div className="chat-messages">
        {messages.map((message: any) => {
          return (
            <div>
              <div
                className={`message ${
                  message.fromSelf ? "sended" : "recieved"
                }`}
              >
                <div className="content ">
                  <p>{message.message}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <ChatInput handleSendMsg={handleSendMsg} />
    </div>
  )
}

export default ChatContainer
