import Image from "next/image";
import Link from "next/link";
import styles from "../styles/commonStyle.module.css";
import logo from "../assets/logo.png";
import background from "../assets/training&mentorship.png";
import arrow from "../assets/arrow-drop-down.svg";
import youTube from "../assets/icons/youtube-2.svg";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedIn from "../assets/icons/linkedin.svg";
import { addQuery } from "./api/API";
import { useRouter } from "next/router";
import { useState } from "react";

var generator = require("generate-password");

export default function TrainingMentorship() {
  const [name, setName] = useState("");
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    var firstName = name;
    var lastName = "";

    var ticket = generator.generate({ length: 10, numbers: true });

    const newQuery = {
      Comments: query,
      "First Name": firstName,
      "Last Name": lastName,
      Status: "New",
      Emails: "",
      "Phone number": "",
      Location: "",
      "Query Number": ticket,
      Type: "Training & Mentorship",
    };

    addQuery(newQuery).then(() => {
      localStorage.setItem("tracking id", ticket);
      router.push("/generate_tracking_id");
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
        <div className={styles.home__buttons} style={{ width: "13em" }}>
          <button className={styles.menu__button__plain}>
            Training & Mentorship
          </button>
        </div>
        <div className={styles.query}>
          <div className={styles.name__field}>
            <div className={styles.name__label}>Name:</div>
            <input
              className={styles.name__input}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className={styles.query__field}>
            <div className={styles.query__label}>
              Training & Mentorship Query
            </div>
            <textarea
              className={styles.query__input}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            ></textarea>{" "}
          </div>{" "}
          <button className={styles.query__submit} onClick={handleSubmit}>
            submit
          </button>
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
