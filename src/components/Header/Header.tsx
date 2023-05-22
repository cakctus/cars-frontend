import React, { useState, useRef, useEffect } from "react"
import styles from "./Header.module.css"
import Logo from "./pics/Logo"
import Arrow from "./pics/Arrow"
import ArrowUp from "./pics/ArrowUp"
import Parking from "./pics/Parking"
import Message from "./pics/Message"
import Profile from "./pics/Profile"
import Chat from "../Chat/Chat"
import { Link } from "react-router-dom"
import Settings from "./pics/Settings"

type Props = {}

const Header = (props: Props) => {
  const [coords, setCoord] = useState<any>({
    left: 0,
    top: 0,
  })
  const [messageCoord, setMessageCoord] = useState<any>({
    left: 0,
    top: 0,
  })
  const [email, setEmail] = useState<string>("")
  const [showBlock, setShowBlock] = useState<boolean>(false)
  const [showMessage, setShowMessage] = useState<boolean>(false)

  const parentRef = useRef<HTMLDivElement>(null)
  const divRef = useRef<HTMLDivElement>(null)
  const messageDiv = useRef<HTMLDivElement>(null)
  const chatDiv = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const user = localStorage.getItem("user")

    if (user !== null) {
      setEmail(JSON.parse(user).email)
    }
  }, [])

  const handleCoord = (e: React.MouseEvent) => {
    // setShowBlock((prev) => !prev)
    console.log(parentRef, "target")

    const clickedElement = e.target as HTMLDivElement
    if (parentRef.current) {
      setShowBlock((prev) => !prev)
      const rect = parentRef.current.getBoundingClientRect()
      const { left, top, right, bottom, x, y } = rect
      console.log(rect)
      setCoord({
        left,
        top,
      })

      if (showBlock === true) {
        const blockRef = divRef.current
        if (blockRef) {
          const blockRect = blockRef.getBoundingClientRect()
          const blockWidth = blockRect.width
          const blockHeight = blockRect.height

          const blockLeft = left - blockWidth / 2.5
          const blockRight = right - blockWidth
          const blockTop = top - blockHeight

          blockRef.style.left = `${blockRight}px`
          blockRef.style.top = `${blockTop}px`
        }
      } else {
        //@ts-ignore
        divRef.current!.style.top = `${top + 10}px`
        // divRef.current!.style.left = `${97}%`
      }
    }
  }

  const handleMessage = (e: React.MouseEvent) => {
    if (messageDiv.current) {
      setShowMessage((prev) => !prev)
      const rect = messageDiv.current.getBoundingClientRect()
      const { left, top, right } = rect

      setMessageCoord({
        left,
        top,
      })

      if (showMessage === true) {
        const blockRef = chatDiv.current
        if (blockRef) {
          const blockRect = blockRef.getBoundingClientRect()
          const blockWidth = blockRect.width
          const blockHeight = blockRect.height

          const blockLeft = left - blockWidth / 2.5
          const blockRight = right - blockWidth
          const blockTop = top - blockHeight

          blockRef.style.left = `${blockRight}px`
          // blockRef.style.right = `${0}px`
          blockRef.style.top = `${blockTop}px`
        }
      } else {
        chatDiv.current!.style.top = `${top + 10}px` // Reset the top position when hiding the absolute block
      }
    }
  }

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.headerChild}>
          <div className={styles.headerItemOne}>
            <Link to={"/"}>
              <div className={styles.logoLink}>
                <Logo />
              </div>
            </Link>
            <div className={styles.keyWord}>
              Moldova`s biggest vehicle marketplace
            </div>
          </div>

          <div className={styles.headerItemTwo}>
            <div className={styles.headerItemTwoItem}>
              <button className={styles.searchButton}>
                <span className={styles.searchButtonText}>Search</span>
              </button>
              <div>
                <span className={styles.searchButtonImg}>
                  <Arrow />
                </span>
              </div>
            </div>

            <div className={styles.headerItemTwoItem}>
              <button className={styles.searchButton}>
                <span className={styles.searchButtonText}>Sell</span>
              </button>
              <div>
                <span className={styles.searchButtonImg}>
                  <Arrow />
                </span>
              </div>
            </div>

            <div className={styles.headerItemTwoItem}>
              <button className={styles.searchButton}>
                <span className={styles.searchButtonText}>Inform</span>
              </button>
              <div>
                <span className={styles.searchButtonImg}>
                  <Arrow />
                </span>
              </div>
            </div>
          </div>
          {localStorage.getItem("token") ? (
            <div className={styles.headerItemThree}>
              <div className={styles.parking}>
                <Parking />
              </div>
              <div
                className={styles.parking}
                onClick={handleMessage}
                ref={messageDiv}
              >
                <Message />
              </div>
              <div
                className={`${styles.parking} ${styles.relativeBlock} `}
                onClick={handleCoord}
                ref={parentRef}
              >
                <Profile />
                {showBlock ? <ArrowUp /> : <Arrow />}
              </div>
              {/* profile block */}
              <div
                className={styles.absoluteBlock}
                ref={divRef}
                style={{ display: showBlock === true ? "block" : "none" }}
              >
                <div className={`${styles.absoluteBlockItem}`}>
                  <div className={styles.listItemsModal}>
                    <div className={styles.listItemModal}>
                      <Settings />
                    </div>
                    <div className={styles.listItemText}>Settings</div>
                  </div>
                </div>
                <div className={styles.absoluteBlockItem}>
                  <div className={styles.absoluteItem}>
                    <span className={styles.emailLogg}>Logged as</span>
                    <div className={styles.listItemText}>{email}</div>
                  </div>
                  <div className={styles.logoutContainer}>
                    <button className={styles.logoutButton}>Log out</button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.loginButton}>
              <Link to={"login"}>
                <button className={styles.login}>
                  <span className={styles.loginText}>Login</span>
                </button>
              </Link>
            </div>
          )}
          {/* <div className={styles.headerItemThree}>
            <div className={styles.parking}>
              <Parking />
            </div>
            <div className={styles.parking}>
              <Message />
            </div>
            <div className={styles.parking}>
              <Profile />
              <Arrow />
            </div>
            <div className={styles.loginButton}>
              <button className={styles.login}>
                <span className={styles.loginText}>Login</span>
              </button>
            </div>
          </div> */}
        </nav>
      </header>
      {/* chat block */}
      <div
        className={styles.absoluteBlock}
        style={{ display: showMessage === true ? "block" : "none" }}
        ref={chatDiv}
      >
        <Chat />
      </div>
    </>
  )
}

export default Header
