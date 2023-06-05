import auth from "../../../http"
import { AxiosResponse } from "axios"

class CreateAdService {
  url: string = "/create"

  async createAd(body: any) {
    auth.post(`${this.url}/create-ad`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  }
}

export default new CreateAdService()
