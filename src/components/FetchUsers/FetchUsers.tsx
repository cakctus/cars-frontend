import { useEffect, useState } from "react"
import fetchUsersService from "../../services/users/fetchUsersService"
import { AuthType } from "../../types/auth/authType"

type Props = {}

const FetchUsers = (props: Props) => {
  const [users, setUsers] = useState<AuthType[]>([])
  const [notLog, setNogLog] = useState<string>()

  const fetchUsers = async () => {
    try {
      const response = await fetchUsersService.getUsers()
      const data = await response.data
      setUsers(data)
      console.log(response)
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

  return (
    <div>
      {users.map((user) => {
        return <div key={user.userId}>{user?.email}</div>
      })}
    </div>
  )
}

export default FetchUsers
