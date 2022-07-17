import Image from "next/image";
import Link from "next/link";
import styles from "../styles/generateTrackingId.module.css";
import logo from "../assets/logo.png";
import background from "../assets/technical.png";
import arrow from "../assets/arrow-drop-down.svg";
import youTube from "../assets/icons/youtube-2.svg";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedIn from "../assets/icons/linkedin.svg";
import { useEffect, useState } from "react";

export default function GenerateTrackingId() {
  const [trackingId, setTrackingId] = useState("");

  useEffect(() => {
    var id = localStorage.getItem("tracking id");
    setTrackingId(id);
    setTimeout(() => {
      localStorage.clear();
    }, 100000);
  }, []);

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
        <div className={styles.inner__div}>
          <div className={styles.title}>Generate Tracking ID: {trackingId}</div>
          <div className={styles.details}>
            Thank you for your query. Please allow up to 48 hrs before tracking.
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
