import auth from "../../http"
import { AxiosResponse } from "axios"
import { AuthType } from "../../types/auth/authType"

class ProfileService {
  url: string = "/profile/"

  async updateProfile(): Promise<AxiosResponse> {
    return auth.get<AuthType>("/refresh")
  }

  async deletePhone(id: any): Promise<AxiosResponse> {
    return auth.post(`${this.url}/delete-phone`, { id })
  }
}

export default new ProfileService()
