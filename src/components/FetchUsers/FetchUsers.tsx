import { useEffect, useState } from "react"
import fetchUsersService from "../../services/users/fetchUsersService"
import { AuthType } from "../../types/auth/authType"
import Modal from "./MsgModal"
import styles from "./Style.module.css"

type Props = {}

const FetchUsers = (props: Props) => {
  const [users, setUsers] = useState<AuthType[]>([])
  const [userId, setUserId] = useState<number | undefined>()
  const [notLog, setNogLog] = useState<string>()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fetchUsers = async () => {
    try {
      const response = await fetchUsersService.getUsers()
      const data = await response.data
      setUsers(data)
      console.log(data)
    } catch (error) {
      setNogLog("Please login")
      //   console.log(error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  if (notLog) {
    return <h1>{notLog}</h1>
  }

  const handleOpenModal = (id: number) => {
    setIsModalOpen(true)
    setUserId(id)
  }

  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false)
    }
  }

  const sendMessage = (user: any) => {
    console.log(user)
  }

  return (
    <div>
      {users.map((user) => {
        return (
          <div className={styles.user} key={user.id}>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} id={userId}>
              <h2>Modal Content</h2>
              <p>This is a simple modal.</p>
            </Modal>
            <div>
              <button onClick={() => sendMessage(user)}>Send message</button>
              {user?.email}{" "}
              <span onClick={() => handleOpenModal(user.id)}>message</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FetchUsers
