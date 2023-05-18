import { useState } from "react"
import { useGetChatsQuery } from "../../redux/api/chat/chatApi"

import styles from "./Chat.module.css"
import ChatContainer from "./ChatContainer/ChatContainer"

type Props = {}

const Chat = (props: Props) => {
  const myIds: any = localStorage.getItem("user")
  const myId = JSON.parse(myIds).userId
  const { data: chats, isLoading, isError } = useGetChatsQuery(myId)
  const [clickUser, setClickUser] = useState<any>({})

  const handleUser = (chat: any) => {
    setClickUser(chat)
  }

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <div>List of users</div>
        <div className={styles.userList}>
          {chats?.map((chat: any) => {
            return (
              <div
                className={styles.userItem}
                key={chat.id}
                onClick={() => handleUser(chat)}
              >
                {chat.email}
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.chat}>
        {chats?.length ? (
          <ChatContainer user={clickUser} myId={myId} />
        ) : (
          "No chats"
        )}
      </div>
    </div>
  )
}

export default Chat
