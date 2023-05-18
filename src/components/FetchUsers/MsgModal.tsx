import { useState } from "react"
import { useAppDispatch } from "../../redux/store/store"
import { addId } from "../../redux/slices/chat/chatSlice"

import styles from "./Style.module.css"

type Props = {
  id: number | undefined
  isOpen: boolean
  onClose: (e: React.MouseEvent) => void
  children: any
}

const MsgModal = ({ id, isOpen, onClose, children }: Props) => {
  const myIds: any = localStorage.getItem("user")
  const myId = JSON.parse(myIds).userId
  // const [myId, setMyId] = useState(storedId ? JSON.parse(storedId) : null)
  const dispatch = useAppDispatch()

  console.log(JSON.parse(myId).userId)

  const sendId = () => {
    if (id) {
      dispatch(addId({ myId, id }))
    }
  }

  return (
    <>
      {isOpen && (
        <div className={styles.modalOverlay} onClick={onClose}>
          <div className={styles.modal}>
            <div>
              <label htmlFor="message">Write message:</label>
              <br />
              <textarea
                defaultValue={"It was a dark and stormy night..."}
                id="message"
                name="message"
                rows={10}
                cols={40}
              ></textarea>
              <br />
              <p>{id}</p>
              <button onClick={sendId}>Send</button>
            </div>
            <button className={styles.closeButton} onClick={onClose}>
              Close
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default MsgModal
