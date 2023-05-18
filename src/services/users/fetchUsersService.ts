import auth from "../../http"
import { AxiosResponse } from "axios"
import { AuthType } from "../../types/auth/authType"

class FetchUsersService {
  async getUsers(): Promise<AxiosResponse<AuthType[]>> {
    return auth.get<AuthType[]>("/users")
  }
}

export default new FetchUsersService()
