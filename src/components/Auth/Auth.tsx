import { useState } from "react"
import styles from "./Auth.module.css"
import Reg from "./Reg/Reg"
import Login from "./Login/Login"

type Props = {}

const Auth = (props: Props) => {
  const [title, setTitle] = useState<number>(0)
  const arrayOfComponents = [<Login />, <Reg />]
  const arrayOfTitle = ["Login", "Register"]

  const handleTitle = (index: number) => {
    setTitle(index)
  }

  return (
    <div className={styles.authContainer}>
      <div className={styles.authBlock}>
        <div className={styles.containerWidth}>
          <div className={styles.authTitle}>
            {arrayOfTitle.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    color: title === index ? "rgb(255, 102, 0)" : "black",
                    background:
                      title !== index
                        ? "rgb( 247,247,247)"
                        : "rgb(255, 255, 255)",
                    borderRight: title === 0 ? "1px solid silver" : "0px",
                    borderBottom: title !== index ? "1px solid silver" : "0px",
                    borderLeft: title === 1 ? "1px solid silver" : "0px",
                    // borderTopLeftRadius: title === 0 ? "10px" : "0",
                  }}
                  className={styles.titleItem}
                  onClick={() => handleTitle(index)}
                >
                  {item}
                </div>
              )
            })}
          </div>
          {arrayOfComponents.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className={styles.formContainer}
                style={{ display: title === index ? "block" : "none" }}
              >
                <div className={styles.formItem}>{item}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Auth
