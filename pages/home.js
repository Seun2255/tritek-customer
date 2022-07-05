import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../assets/logo.png";
import background from "../assets/home.png";
import arrow from "../assets/arrow-drop-down.svg";

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
            <div className={styles.column__item}>FAQ</div>
            <div className={styles.column__item}>Courses</div>
            <div className={styles.column__item}>Bulletin</div>
          </div>
          <div className={styles.footer__column}>
            <div className={styles.column__item}>Contact Us</div>
            <div className={styles.column__item}>Blogs</div>
            <div className={styles.column__item}>Cookies</div>
            <div className={styles.column__item}>Terms and Conditions</div>
            <div className={styles.column__item}>Privacy Policy</div>
            <div className={styles.column__item}>Feedback</div>
          </div>
          <div className={styles.footer__column}>
            <div className={styles.column__item}>GET IN TOUCH</div>
            <div className={styles.column__item}></div>
            <div className={styles.column__item}></div>
          </div>
        </div>
        <div className={styles.copyright}>
          Copyright 2022 Tritek Consulting Ltd
        </div>
      </footer>
    </div>
  );
}
