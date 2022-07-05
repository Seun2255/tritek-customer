import Image from "next/image";
import Link from "next/link";
import styles from "../styles/feedback.module.css";
import logo from "../assets/logo.png";
import background from "../assets/feedback.png";
import arrow from "../assets/arrow-drop-down.svg";
import youTube from "../assets/icons/youtube-2.svg";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedIn from "../assets/icons/linkedin.svg";

export default function Feedback() {
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
          <button className={styles.menu__button__plain}>Feedback</button>
        </div>
      </main>
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
    </div>
  );
}
