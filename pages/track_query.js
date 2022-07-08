import Image from "next/image";
import Link from "next/link";
import styles from "../styles/track_query.module.css";
import logo from "../assets/logo.png";
import background from "../assets/technical.png";
import arrow from "../assets/arrow-drop-down.svg";
import youTube from "../assets/icons/youtube-2.svg";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedIn from "../assets/icons/linkedin.svg";

export default function TrackQuery() {
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
          <button className={styles.menu__button__plain}>Track Query</button>
        </div>
        <div className={styles.query}>
          <div className={styles.query__id}>
            <div className={styles.name__field}>
              <div className={styles.name__label}>Enter query ID:</div>
              <input className={styles.name__input} />
            </div>
            <button className={styles.query__submit}>submit</button>
          </div>
          <div className={styles.query__field}>
            <div className={styles.query__label}>Query Response</div>
            <textarea className={styles.query__input}></textarea>{" "}
          </div>
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
