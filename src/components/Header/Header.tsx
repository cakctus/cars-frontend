import React from "react"
import styles from "./Header.module.css"
import Logo from "./Logo"
import Arrow from "./Arrow"
import Parking from "./Parking"

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

          <div className={styles.headerItemThree}>
            <div className={styles.parking}>
              <Parking />
            </div>
            <div className={styles.loginButton}>
              <button className={styles.login}>
                <span className={styles.loginText}>Login</span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
