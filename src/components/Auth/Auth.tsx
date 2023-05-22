import { useState, useEffect } from "react"
import styles from "./Auth.module.css"
import Reg from "./Reg/Reg"
import Login from "./Login/Login"
import AuthLinks from "./AuthLinks/AuthLinks"
import AuthContainer from "./AuthContainer/AuthContainer"
import { useSelector } from "react-redux"

type Props = {}

const Auth = (props: Props) => {
  const [title, setTitle] = useState<number>(0)
  const arrayOfComponents = [<Login />, <Reg />]
  const arrayOfTitle = ["Login", "Register"]
  const authState = useSelector((state: any) => state.auth)

  const handleTitle = (index: number) => {
    setTitle(index)
  }

  useEffect(() => {
    if (authState.regSuccess) {
      setTitle(0)
    }
  }, [authState.regSuccess])

  return (
    <div className={styles.authContainer}>
      <div className={styles.authBlock}>
        <div className={styles.containerWidth}>
          <div className={styles.authTitle}>
            {arrayOfTitle.map((item, index) => {
              return (
                <AuthLinks
                  item={item}
                  index={index}
                  title={title}
                  handleTitle={handleTitle}
                  key={index}
                />
              )
            })}
          </div>
          {arrayOfComponents.map((item: any, index: number) => {
            return (
              <AuthContainer
                item={item}
                index={index}
                title={title}
                key={index}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Auth
