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
import { useState, useEffect } from "react";
import { getResponses } from "./api/API";

export default function TrackQuery() {
  const [queries, setQueries] = useState([]);
  const [trackingId, setTrackingId] = useState("");
  const [response, setResponse] = useState("");
  useEffect(() => {
    getResponses().then((data) => {
      setQueries(data);
    });
  }, []);

  const handleSubmit = () => {
    queries.map((query) => {
      if (query["Query Number"] === trackingId) {
        setResponse(query["Response"]);
      }
    });
  };

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
              <input
                className={styles.name__input}
                onChange={(e) => {
                  setTrackingId(e.target.value);
                }}
              />
            </div>
            <button className={styles.query__submit} onClick={handleSubmit}>
              submit
            </button>
          </div>
          <div className={styles.query__field}>
            <div className={styles.query__label}>Query Response</div>
            <div className={styles.query__input}>{response}</div>
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
