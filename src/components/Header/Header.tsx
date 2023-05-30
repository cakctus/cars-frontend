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
import { useAppDispatch, useAppSelector } from "../../redux/store/store"
import { chatIsOpen } from "../../redux/slices/chat/chatSlice"

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
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const [scrollOffset, setScrollOffset] = useState(0)

  const parentRef = useRef<HTMLDivElement>(null)
  const divRef = useRef<HTMLDivElement>(null)
  const messageDiv = useRef<HTMLDivElement>(null)
  const chatDiv = useRef<HTMLDivElement>(null)

  const chatState = useAppSelector((state: any) => state.chat)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const user = localStorage.getItem("user")

    if (user !== null) {
      setEmail(JSON.parse(user).email)
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setScrollOffset(scrollTop)
    }

    window.addEventListener("scroll", handleScroll)

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleCoord = (e: React.MouseEvent) => {
    if (parentRef.current) {
      setShowBlock((prev) => !prev)
      const rect = parentRef.current.getBoundingClientRect()
      const { left, top, right, bottom, x, y } = rect

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
          // const blockTop = top - blockHeight
          const blockTop = top - blockHeight + scrollOffset

          // blockRef.style.left = `${blockRight - 15}px`
          blockRef.style.top = `${blockTop}px`
          if (windowSize.width >= 1140) {
            blockRef.style.left = `${blockLeft}px`
          } else {
            blockRef.style.left = `${blockRight - 15}px`
          }
        }
      } else {
        //@ts-ignore
        const blockRect = parentRef!.current!.getBoundingClientRect()
        const blockWidth = blockRect.width
        const blockHeight = blockRect.height
        const blockRight = right - blockWidth
        const blockLeft = left - blockWidth / 2.5
        const blockTop = top + 10 + scrollOffset
        divRef.current!.style.top = `${blockTop - 15}px`
        // divRef.current!.style.left = `${blockRight - 140}px`
        if (windowSize.width >= 1122) {
          divRef.current!.style.left = `${blockLeft - 50}px`
        } else {
          divRef.current!.style.left = `${blockRight - 130}px`
        }
      }
    }
  }

  const handleMessage = (e: React.MouseEvent) => {
    dispatch(chatIsOpen())
    console.log(messageDiv, "target")
    const clickedElement = e.target as HTMLDivElement
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
          // const blockTop = top - blockHeight

          const blockTop = top - blockHeight + scrollOffset
          blockRef.style.left = `${blockRight}px`
          // blockRef.style.right = `${0}px`
          blockRef.style.top = `${blockTop}px`
          console.log(
            "close",
            document.getElementById("chatContainer")?.offsetHeight
          )
        }
      } else {
        const blockRef = clickedElement.parentElement?.parentElement
        const blockRect = chatDiv!.current!.getBoundingClientRect()
        const blockWidth = blockRect.width
        const blockHeight = blockRect.height
        const blockLeft = left - blockWidth / 2.5
        const blockRight = right - blockWidth
        // const blockTop = top - blockHeight
        const blockTop = top + 10 + scrollOffset
        chatDiv.current!.style.top = `${blockTop - 15}px`
        // chatDiv.current!.style.left = `${blockRight - 800}px`
        if (windowSize.width >= 1951) {
          chatDiv.current!.style.left = `${blockLeft - 400}px`
        } else {
          chatDiv.current!.style.left = `${blockRight - 800}px`
        }
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
                className={`${styles.parking} ${styles.relativeBlock} `}
                onClick={handleMessage}
                ref={messageDiv}
              >
                {/* <Message handleMessage={handleMessage} /> */}
                <Message />
              </div>
              <div
                className={styles.absoluteBlock}
                style={{ display: showMessage === true ? "block" : "none" }}
                ref={chatDiv}
                id="chatContainer"
              >
                <Chat />
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
      {/* <div
        className={styles.absoluteBlock}
        style={{ display: showMessage === true ? "block" : "none" }}
        ref={chatDiv}
      >
        <Chat />
      </div> */}
    </>
  )
}

export default Header
