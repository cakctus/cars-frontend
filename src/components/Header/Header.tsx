import styles from "./Header.module.css"
import Logo from "./pics/Logo"
import Arrow from "./pics/Arrow"
import Parking from "./pics/Parking"
import Message from "./pics/Message"
import Profile from "./pics/Profile"
import { spawn } from "child_process"

type Props = {}

const Header = (props: Props) => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.headerChild}>
          <div className={styles.headerItemOne}>
            <a href="" className={styles.logoLink}>
              <Logo />
            </a>
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
              <div className={styles.parking}>
                <Message />
              </div>
              <div className={styles.parking}>
                <Profile />
                <Arrow />
              </div>
            </div>
          ) : (
            <div className={styles.loginButton}>
              <button className={styles.login}>
                <span className={styles.loginText}>Login</span>
              </button>
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
    </>
  )
}

export default Header
