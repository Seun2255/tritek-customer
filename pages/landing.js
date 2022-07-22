import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/landing.module.css";
import logo from "../assets/logo.png";
import background from "../assets/landing.jpg";
import arrow from "../assets/arrow-drop-down.svg";
import youTube from "../assets/icons/youtube-2.svg";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedIn from "../assets/icons/linkedin.svg";

export default function Landing() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.background__image}>
          <Image alt="background" layout="fill" src={background} />
        </div>
        <Link href={"/"}>
          <div className={styles.logo}>
            <Image alt="logo" layout="fill" src={logo} />
          </div>
        </Link>
        <div className={styles.home__buttons}>
          <button className={styles.menu__button}>
            <span style={{ color: "#085394" }}>Menu</span>
            <div className={styles.dropdown__arrow}>
              <Image alt="arrow" layout="fill" src={arrow} />
            </div>
          </button>
          <Link href={"/contact_us"}>
            <button className={styles.menu__button}>
              <span>Contact Us</span>
              <div className={styles.dropdown__arrow}>
                <Image alt="arrow" layout="fill" src={arrow} />
              </div>
            </button>
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.social__links}>
          <div className={styles.icon}>
            <Image alt="arrow" layout="fill" src={youTube} />
          </div>
          <div className={styles.icon}>
            <Image alt="arrow" layout="fill" src={twitter} />
          </div>
          <div className={styles.icon}>
            <Image alt="arrow" layout="fill" src={linkedIn} />
          </div>
          <div className={styles.icon}>
            <Image alt="arrow" layout="fill" src={instagram} />
          </div>
          <div className={styles.icon}>
            <Image alt="arrow" layout="fill" src={facebook} />
          </div>
        </div>
      </footer>
    </div>
  );
}
