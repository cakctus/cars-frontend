import { useState, useEffect, useRef } from "react"
import { useGetChatsQuery } from "../../redux/api/chat/chatApi"
import { useAppDispatch, useAppSelector } from "../../redux/store/store"

import { io } from "socket.io-client"
import axios from "axios"

import styles from "./Chat.module.css"
import ChatContainer from "./ChatContainer/ChatContainer"
import UserList from "./UserList/UserList"

type Props = {}

const Chat = (props: Props) => {
  const myIds: any = localStorage.getItem("user") // todo check if localstorage exists
  const myId = JSON.parse(myIds)?.userId
  const [clickUser, setClickUser] = useState<any>({})
  const [clickedId, setClickedId] = useState<any>({})
  const [skip, setSkip] = useState<boolean>(true)
  const {
    data: chats,
    isLoading,
    isError,
  } = useGetChatsQuery(
    { myId, userId: clickUser.id },
    {
      skip,
      pollingInterval: 5000,
    }
  )
  const [chats2, setChats2] = useState([])
  const [lastMessages, setLastMessage] = useState<string>("")
  const socket = useRef<any>()
  const chatState = useAppSelector((state: any) => state.chat)
  const dispatch = useAppDispatch()

  const handleUser = (chat: any) => {
    // setClickUser(chat)
    setClickedId(chat)
    console.log("click")
  }

  useEffect(() => {
    if (chatState.isOpen) {
      setSkip(false)
    } else {
      setSkip(true)
    }
  }, [chatState.isOpen])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await axios
  //       .post("http://localhost:5000/api/chat/my-chat", { ...clickUser })
  //       .then((res) => setChats2(res.data))
  //       .catch((error) => console.log(error))
  //   }

  //   fetchData()
  // }, [])

  // console.log(clickUser)
  // console.log(myId, clickUser.id)

  useEffect(() => {
    if (JSON.parse(myIds)) {
      socket.current = io("http://localhost:5001")
      socket.current.emit("add-user", myId)
    }
  }, [JSON.parse(myIds)])

  return (
    <main className={styles.container}>
      <section className={styles.user}>
        <UserList
          chats={chats}
          handleUser={handleUser}
          lastMessages={lastMessages}
        />
      </section>
      <section className={styles.chat}>
        <ChatContainer
          user={clickedId}
          myId={myId}
          socket={socket}
          lastMessages={lastMessages}
          setLastMessage={setLastMessage}
        />
      </section>
    </main>
  )
}

export default Chat
