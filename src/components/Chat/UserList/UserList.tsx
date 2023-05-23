import styles from "../Chat.module.css"

type Props = {
  chats: any
  handleUser: (arg: any) => void
  lastMessages: any
}

const UserList = ({ chats, handleUser, lastMessages }: Props) => {
  return (
    <>
      <h4 className={styles.chatTitle}>
        {chats?.length ? "Chats" : "No message yet."}
      </h4>
      <div className={styles.userContainer}>
        {chats?.map((chat: any, index: any) => {
          return (
            <div className={styles.userList} key={index}>
              <div className={styles.blockUser}></div>
              <div className={styles.blockMsg}>
                <div
                  className={styles.userItem}
                  key={chat?.id}
                  onClick={() => handleUser(chat)}
                >
                  {chat?.email}
                </div>
                <div>{lastMessages && lastMessages}</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default UserList
