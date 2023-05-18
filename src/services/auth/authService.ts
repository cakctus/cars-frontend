import auth from "../../http"
import { AxiosResponse } from "axios"
import { AuthType } from "../../types/auth/authType"

class AuthService {
  async reg(email: string, password: string): Promise<AxiosResponse<AuthType>> {
    return auth.post<AuthType>("/reg", { email, password })
  }

  async login(email: string, password: string) {
    // return auth.post<AuthType>("/login", { email, password })
    return auth.post("/login", { email, password })
  }

  async logout() {
    return auth.post("/logout")
  }

  async refresh() {
    return auth.post<AuthType>("/refresh")
  }
}

export default new AuthService()
