import auth from "../../http"

class ChatService {
  async addId(myId: number, id: number) {
    return auth.post("/chat/add-id", { myId, id })
  }

  async myChats(myId: number) {
    return auth.post("/chat/my-chat", { myId: myId })
  }
}

export default new ChatService()
