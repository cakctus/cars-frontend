import styles from "./Footer.module.css"
import Fb from "./socials/fb"
import Ig from "./socials/ig"
import Arrow from "./Arrow"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerSection}>
        <div className={styles.footerContainer}>
          <div className={`${styles.footerItem} ${styles.one} `}>
            <div className={styles.intro}>
              eBay and the eBay logos are trademarks of eBay Inc.
            </div>
            <div className={styles.socials}>
              <span className={styles.social}>
                <span>
                  <Fb />
                </span>
              </span>
              <span>
                <span>
                  <Ig />
                </span>
              </span>
              <span></span>
            </div>
            <div>
              <section className={styles.search}>
                <div className={styles.searchContainer}>
                  <div className={styles.searchItem}>
                    <div className={styles.searchInline}>
                      <div className={styles.searchInlineOne}>
                        <select
                          className={styles.placeHolderTitle}
                          name="lang"
                          id="lang"
                        >
                          <option value="any">Română</option>
                          <option>Русский</option>
                          <option>English</option>
                        </select>
                      </div>
                      <div className={styles.searchInlineTwo}>
                        <Arrow />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className={`${styles.footerItem} ${styles.two}`}>
            <div className={styles.footerLinksContainer}>
              <div className={styles.footerLinkItem}>
                <div className={styles.FooterLinkTitle}>Company</div>
                <ul className={styles.footerLinksBlock}>
                  <li className={styles.footerLinkItem}>About us</li>
                  <li className={styles.footerLinkItem}>Newsroom</li>
                  <li className={styles.footerLinkItem}>Careers</li>
                  <li className={styles.footerLinkItem}>Advertising</li>
                  <li className={styles.footerLinkItem}>Help</li>
                  <li className={styles.footerLinkItem}>Contact</li>
                </ul>
              </div>
              <div className={styles.footerLinkItem}>
                <div className={styles.FooterLinkTitle}>Legal</div>
                <ul className={styles.footerLinksBlock}>
                  <li className={styles.footerLinkItem}>Imprint</li>
                  <li className={styles.footerLinkItem}>
                    <span className={styles.textWidt}>
                      General Terms and Conditions
                    </span>
                  </li>
                  <li className={styles.footerLinkItem}>Privacy Policy</li>
                  <li className={styles.footerLinkItem}>Privacy Settings</li>
                </ul>
              </div>
              <div className={styles.footerLinkItem}>
                <div className={styles.FooterLinkTitle}>Dealer</div>
                <ul className={styles.footerLinksBlock}>
                  <li className={styles.footerLinkItem}>Login</li>
                  <li className={styles.footerLinkItem}>Register</li>
                  <li className={styles.footerLinkItem}>Our Offer</li>
                  <li className={styles.footerLinkItem}>Price list</li>
                  <li className={styles.footerLinkItem}>
                    Terms and Conditions
                  </li>
                </ul>
              </div>
              <div className={styles.footerLinkItem}>
                <div className={styles.FooterLinkTitle}>Popular</div>
                <ul className={styles.footerLinksBlock}>
                  <li className={styles.footerLinkItem}>mobile.de iOS</li>
                  <li className={styles.footerLinkItem}>mobile.de Android</li>
                  <li className={styles.footerLinkItem}>automobile.it</li>
                  <li className={styles.footerLinkItem}>eBay-Kleinanzeigen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
