import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Detail from "./Detail/Detail"
import Password from "./Password/Password"
import styles from "./Profile.module.css"

type Props = {}

const Profile = (props: Props) => {
  // const onUserChange = (updatedUser: any) => {
  //   setUser(updatedUser)
  // }

  // const u = localStorage.getItem("user")
  // const [user, setUser] = useState<any>(
  //   JSON.parse(localStorage.getItem("user") || "{}")
  // )
  const [clickPage, setClickPage] = useState<number>(0)
  const assideLink: String[] = ["profile", "password"]
  const pages = [<Detail />, <Password />]
  const navigate = useNavigate()

  useEffect(() => {
    // if (!u) {
    //   navigate("/")
    // }
    // if (u) {
    //   setUser(JSON.parse(u))
    // // }
    // setUser(JSON.parse(localStorage.getItem("user") || "{}"))
  }, [])

  return (
    <div className={styles.profile}>
      <div className={styles.profileBlock}>
        <h2 className={styles.profileTitle}>Settings</h2>
        <div className={styles.profileContainer}>
          <aside className={styles.profileAside}>
            {assideLink.map((link, index: number) => {
              return (
                <article
                  className={styles.link}
                  key={index}
                  onClick={() => setClickPage(index)}
                >
                  {link}
                </article>
              )
            })}
          </aside>
          <main className={styles.profileMain}>
            {pages.map((page, index) => {
              return (
                <article
                  key={index}
                  style={{ display: index === clickPage ? "block" : "none" }}
                >
                  {page}
                </article>
              )
            })}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Profile
