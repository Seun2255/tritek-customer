import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import logo from "../assets/logo.png";
import background from "../assets/home.png";
import arrow from "../assets/arrow-drop-down.svg";
import phone from "../assets/icons/phone.svg";
import location from "../assets/icons/location.svg";
import email from "../assets/icons/email.svg";
import youTube from "../assets/icons/youtube-2.svg";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedIn from "../assets/icons/linkedin.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.background__image}>
          <Image alt="background" layout="fill" src={background} />
        </div>
        <div className={styles.logo}>
          <Image alt="logo" layout="fill" src={logo} />
        </div>
        <div className={styles.home__buttons}>
          <button className={styles.menu__button}>
            <span>Menu</span>
            <div className={styles.dropdown__arrow}>
              <Image alt="arrow" layout="fill" src={arrow} />
            </div>
          </button>
          <button className={styles.support__button}>Live Support</button>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footer__links}>
          <div className={styles.footer__column}>
            <div className={styles.column__item}>Home</div>
            <div className={styles.column__item}>Consulting</div>
            <div className={styles.column__item}>About Us</div>
            <div className={styles.column__item}>Succes Stories</div>
            <div className={styles.column__item}>
              <Link href={"/FAQ"}>FAQ</Link>
            </div>
            <div className={styles.column__item}>Courses</div>
            <div className={styles.column__item}>Bulletin</div>
          </div>
          <div className={styles.footer__column}>
            <div className={styles.column__item}>
              <Link href={"/contact_us"}>Contact Us</Link>
            </div>
            <div className={styles.column__item}>Blogs</div>
            <div className={styles.column__item}>Cookies</div>
            <div className={styles.column__item}>Terms and Conditions</div>
            <div className={styles.column__item}>Privacy Policy</div>
            <div className={styles.column__item}>
              <Link href={"/feedback"}>Feedback</Link>
            </div>
          </div>
          <div className={styles.footer__column}>
            <div className={styles.get__in__touch}>GET IN TOUCH</div>
            <div className={styles.column__item}>
              <div className={styles.contact__icon}>
                <Image alt="contact icon" layout="fill" src={location} />
              </div>
              <span>Unit 1i, 75 Millmarsh Lane EN3 7PU</span>
            </div>
            <div className={styles.column__item}>
              <div className={styles.contact__icon}>
                <Image alt="contact icon" layout="fill" src={phone} />
              </div>
              <span>0740 126 2066</span>
            </div>
            <div className={styles.column__item}>
              <div className={styles.contact__icon}>
                <Image alt="contact icon" layout="fill" src={phone} />
              </div>
              <span>0773 711 4714</span>
            </div>
            <div className={styles.column__item}>
              <div className={styles.contact__icon}>
                <Image alt="contact icon" layout="fill" src={phone} />
              </div>
              <span>0203 011 1420</span>
            </div>
            <div className={styles.column__item}>
              <div className={styles.contact__icon}>
                <Image alt="contact icon" layout="fill" src={email} />
              </div>
              <span>info@tritekconsulting.co.uk</span>
            </div>
            <div className={styles.socials}>
              <div className={styles.social__links}>
                <div className={styles.icon}>
                  <Image alt="arrow" layout="fill" src={instagram} />
                </div>
                <div className={styles.icon}>
                  <Image alt="arrow" layout="fill" src={facebook} />
                </div>
                <div className={styles.icon}>
                  <Image alt="arrow" layout="fill" src={twitter} />
                </div>
                <div className={styles.icon}>
                  <Image alt="arrow" layout="fill" src={linkedIn} />
                </div>
                <div className={styles.icon}>
                  <Image alt="arrow" layout="fill" src={youTube} />
                </div>
              </div>
              <div className={styles.socials__label}>Subscribe</div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <span style={{ fontSize: "24px" }}>©</span>opyright 2022 Tritek
          Consulting Ltd
        </div>
      </footer>
    </div>
  );
}
