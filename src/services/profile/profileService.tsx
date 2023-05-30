import auth from "../../http"
import { AxiosResponse } from "axios"
import { AuthType } from "../../types/auth/authType"

class ProfileService {
  async updateProfile(): Promise<AxiosResponse> {
    return auth.get<AuthType>("/refresh")
  }
}

export default new ProfileService()
