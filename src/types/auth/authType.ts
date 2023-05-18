export interface AuthType {
  id: number
  userId: number
  email: string
  isActivated: boolean
  accessToken: string
  refreshToken: string
  dateJoined: Date
  userPhoto: string
  username: string
  firstName: string
  lastName: string
  isStaff: boolean
}
