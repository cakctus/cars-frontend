import styles from "./ArticleThree.module.css"
import Img1 from "./img1.avif"
import Img2 from "./img2.avif"
import Img3 from "./img3.avif"
import Img4 from "./img4.avif"

type Props = {}

const ArticleThree = (props: Props) => {
  return (
    <article className={styles.threeContainer}>
      <section className={styles.threeTitleContainer}>
        <p className={styles.threeTitle}>mobile.de Magazin</p>
        <hr className={styles.threeHr} />
      </section>
      <div className={styles.ItemContainer}>
        <div className={`${styles.itemOne}`}>
          <a className={styles.itemLink} href="">
            <div className={styles.itemOneImgContainer}>
              <img className={styles.itemOneImg} src={Img1} alt="Image one" />
            </div>
            <div className={styles.itemOneTextContainer}>
              <span className={styles.itemOneTitle}>Elektromobilität</span>
              <p className={styles.itemOneSubtitle}>
                Die besten gebrauchten E-Autos
              </p>
              <p className={styles.itemOneText}>
                Elektrisch, nachhaltig und günstig im Preis: Sieben solide
                Stromer, die Du gebraucht kaufen kannst. Erfahre außerdem,
                worauf Du beim gebrauchten Elektroauto achten solltest.
              </p>
            </div>
          </a>
        </div>
        <div className={`${styles.itemTwo}`}>
          <a className={`${styles.itemLink} ${styles.itemLinkTwo}`} href="">
            <div className={styles.itemTwoImgContainer}>
              <img className={styles.itemTwoImg} src={Img2} alt="" />
            </div>
            <div className={styles.itemTwoTextContainer}>
              <span className={styles.itemTwoTitle}>Bestenliste</span>
              <p className={styles.itemTwoSubtitle}>
                Das sind die beliebtesten Kleinstwagen
              </p>
              <p className={styles.itemTwoText}>
                Für wen lohnt sich ein Kleinstwagen und was kostet er im
                Unterhalt. Wir zeigen Dir zehn häufig nachgefragte Modelle – von
                teuerer bis günstig.
              </p>
            </div>
          </a>
          <a className={`${styles.itemLink} ${styles.itemLinkTwo}`} href="">
            <div className={styles.itemTwoImgContainer}>
              <img className={styles.itemTwoImg} src={Img3} alt="" />
            </div>
            <div className={styles.itemTwoTextContainer}>
              <span>Aus der Redaktion</span>
              <p className={styles.itemTwoSubtitle}>
                Die E-Autos mit der größten Reichweite
              </p>
              <p className={styles.itemTwoText}>
                Wir haben die Top 7 E-Autos von Mittelklasse bis zur
                Luxuslimousine nach Reichweite gerankt.
              </p>
            </div>
          </a>
          <a className={`${styles.itemLink} ${styles.itemLinkTwo}`} href="">
            <div className={styles.itemTwoImgContainer}>
              <img className={styles.itemTwoImg} src={Img4} alt="" />
            </div>
            <div>
              <span>Bestenliste</span>
              <p className={styles.itemTwoSubtitle}>
                Das sind die beliebtesten Kleinstwagen
              </p>
              <p className={styles.itemTwoText}>
                Für wen lohnt sich ein Kleinstwagen und was kostet er im
                Unterhalt. Wir zeigen Dir zehn häufig nachgefragte Modelle – von
                teuerer bis günstig.
              </p>
            </div>
          </a>
        </div>
      </div>
    </article>
  )
}

export default ArticleThree
