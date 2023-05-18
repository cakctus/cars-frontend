import styles from "./ArticleFive.module.css"
import HeaderImg from "./pics/header.avif"
import BodyOne from "./pics/bodyone.avif"
import BodyTwo from "./pics/bodytwo.png"
import BodyThree from "./pics/bodythree.png"
import BodyFour from "./pics/bodyfour.png"

type Props = {}

const ArticeFive = (props: Props) => {
  return (
    <article className={styles.fiveContainer}>
      <section className={styles.fiveSection}>
        <h1 className={styles.sectionTitle}>
          Buy, sell, finance & lease used car? Or new car? Mobile.de!
        </h1>
        <hr />
        <div>
          <section className={styles.sectionHeader}>
            <figure className={styles.headerImg}>
              <img src={HeaderImg} alt="Header Image" />
            </figure>
            <div className={styles.headerInfo}>
              <p className={styles.headerTitle}>
                Hier findest Du alles, was mit Fahrzeugen zu tun hat – verschaff
                Dir ganz einfach einen Überblick über den gesamten Automarkt.
                Hier warten täglich über 1,2 Millionen Fahrzeuge auf Dich.
              </p>
              <h2 className={styles.headerSubtitle}>
                mobile.de ist Deutschlands größter Fahrzeugmarkt
              </h2>
              <p className={styles.headerText}>
                mobile.de ist Deutschlands größter Fahrzeugmarkt, auf dem Du
                einfach ein Auto kaufen oder verkaufen kannst. Hier gibt es
                Gebrauchtwagen, Neuwagen, Youngtimer, Oldtimer, Kleinwagen und
                Kompakte, SUV, luxuriöse Limousinen und günstige Autos. Du
                kannst Dein gebrauchtes Auto verkaufen, Neuwagen- und
                Gebrauchtwagenverkäufer kontaktieren. Du kannst mehr über
                Automarken und Modelle herausfinden, Dich über die
                Fahrzeugfinanzierung informieren, Finanzierungsangebote und
                Monatsraten vergleichen, oder Leasing-Angebote finden. Ebenso
                findest Du Auto-Tipps, Tests, Ratgeber und vieles mehr.
              </p>
            </div>
          </section>
          <section className={styles.sectionBody}>
            <div className={styles.sectionBodyContainer}>
              <div className={styles.sectionBodyItems}>
                <div className={styles.sectionBodyItem}>
                  <img src={BodyOne} alt="" />
                </div>
                <div className={styles.sectionBodyItem}>
                  <h3>Denkst Du Auto verkaufen?</h3>
                  <p>
                    Dann kannst Du Dein gebrauchtes Auto hier kostenlos
                    verkaufen. Einfach und bequem. Zum maximalen Preis per
                    Inserat oder schnell per Expressverkauf an einer mobile.de
                    Ankaufsstation.
                  </p>
                </div>
              </div>
              <div className={styles.sectionBodyItems}>
                <div className={styles.sectionBodyItem}>
                  <img src={BodyTwo} alt="" />
                </div>
                <div className={styles.sectionBodyItem}>
                  <h3>Denkst Du Auto verkaufen?</h3>
                  <p>
                    Dann kannst Du Dein gebrauchtes Auto hier kostenlos
                    verkaufen. Einfach und bequem. Zum maximalen Preis per
                    Inserat oder schnell per Expressverkauf an einer mobile.de
                    Ankaufsstation.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.sectionBodyContainer}>
              <div className={styles.sectionBodyItems}>
                <div className={styles.sectionBodyItem}>
                  <img src={BodyThree} alt="" />
                </div>
                <div className={styles.sectionBodyItem}>
                  <h3>Denkst Du Auto verkaufen?</h3>
                  <p>
                    Dann kannst Du Dein gebrauchtes Auto hier kostenlos
                    verkaufen. Einfach und bequem. Zum maximalen Preis per
                    Inserat oder schnell per Expressverkauf an einer mobile.de
                    Ankaufsstation.
                  </p>
                </div>
              </div>
              <div className={styles.sectionBodyItems}>
                <div className={styles.sectionBodyItem}>
                  <img src={BodyFour} alt="" />
                </div>
                <div className={styles.sectionBodyItem}>
                  <h3>Denkst Du Auto verkaufen?</h3>
                  <p>
                    Dann kannst Du Dein gebrauchtes Auto hier kostenlos
                    verkaufen. Einfach und bequem. Zum maximalen Preis per
                    Inserat oder schnell per Expressverkauf an einer mobile.de
                    Ankaufsstation.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.sectionFooter}></section>
        </div>
      </section>
    </article>
  )
}

export default ArticeFive
