import Image from "next/image";
import Link from "next/link";
import styles from "../styles/feedback.module.css";
import logo from "../assets/logo.png";
import background from "../assets/technical.png";
import arrow from "../assets/arrow-drop-down.svg";
import youTube from "../assets/icons/youtube-2.svg";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedIn from "../assets/icons/linkedin.svg";
import { useState } from "react";
import { addFeedback } from "./api/API";

export default function Technical() {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    addFeedback(input).then(() => {
      setSubmitted(true);
    });
  };

  return (
    <div className={styles.container}>
      {submitted ? (
        <div className={styles.main}>
          <h1 className={styles.center__text}>Feedback Recorded</h1>
        </div>
      ) : (
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
          <div className={styles.query}>
            <div className={styles.query__field}>
              <div className={styles.query__label}>Feedback</div>
              <textarea
                className={styles.query__input}
                onChange={(e) => setInput(e.target.value)}
              ></textarea>{" "}
            </div>
            <button className={styles.query__submit} onClick={handleSubmit}>
              submit
            </button>
          </div>
        </main>
      )}
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
