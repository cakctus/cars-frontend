import { useState } from "react"
import { emailReplace } from "../../../util/emailReplace"
import styles from "../Chat.module.css"

type Props = {
  chats: any
  handleUser: (arg: any) => void
  lastMessages: any
}

const UserList = ({ chats, handleUser, lastMessages }: Props) => {
  // const replaceCharsWithAsterisks = (str: string): string => {
  //   if (str.length < 5) {
  //     return str // If string length is less than 5, no replacement needed
  //   }

  //   const replacedChars = str.substring(0, 2) + "*".repeat(3) + str.substring(5)
  //   return replacedChars
  // }

  return (
    <>
      <h4 className={styles.chatTitle}>
        {chats?.length ? "Chats" : "No message yet."}
      </h4>
      <div className={styles.userContainer}>
        {chats?.map((chat: any, index: any) => {
          return (
            <div className={styles.userList} key={index}>
              {/* <div className={styles.blockUser}>
              </div> */}
              <div className={styles.userNoImage}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 101"
                  width={25}
                >
                  <path
                    d="M50.4 54.5c10.1 0 18.2-8.2 18.2-18.2S60.5 18 50.4 18s-18.2 8.2-18.2 18.2 8.1 18.3 18.2 18.3zm0-31.7c7.4 0 13.4 6 13.4 13.4s-6 13.4-13.4 13.4S37 43.7 37 36.3s6-13.5 13.4-13.5zM18.8 83h63.4c1.3 0 2.4-1.1 2.4-2.4 0-12.6-10.3-22.9-22.9-22.9H39.3c-12.6 0-22.9 10.3-22.9 22.9 0 1.3 1.1 2.4 2.4 2.4zm20.5-20.5h22.4c9.2 0 16.7 6.8 17.9 15.7H21.4c1.2-8.9 8.7-15.7 17.9-15.7z"
                    fill="#d5d2ce"
                    className="color000000 svgShape"
                  ></path>
                </svg>
              </div>
              <div className={styles.blockMsg}>
                <div
                  className={styles.userItem}
                  key={chat?.id}
                  onClick={() => handleUser(chat)}
                >
                  {chat?.email}
                  {/* {emailReplace(chat?.email)} */}
                </div>
                <div>{chat.oponentReadChat ? "read" : "no read"}</div>
                {/* <div className={styles.lastMessage}>
                  {lastMessages && lastMessages.slice(0, 15)}
                </div> */}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default UserList
