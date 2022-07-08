import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/faq.module.css";
import logo from "../assets/logo.png";
import background from "../assets/faq.png";
import arrow from "../assets/arrow-drop-down.svg";
import youTube from "../assets/icons/youtube-2.svg";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedIn from "../assets/icons/linkedin.svg";

export default function FAQ() {
  const [menuOpen, setMenuOpen] = useState(false);
  const questions = [
    "Q. What does Tritek consulting do?",
    "Tritek Consulting Limited specializes in providing a robust all-inclusive state-of-the-art career development training and certifications on a wide range of transitions in the following:",
    "Business Analysis Change",
    "Stakeholder Management",
    "Project Management",
    "Business Intelligence",
  ];

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
          <button
            className={styles.menu__button}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span>FAQs</span>
            <div className={styles.dropdown__arrow}>
              <Image
                alt="arrow"
                layout="fill"
                src={arrow}
                style={{
                  transform: menuOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </div>
          </button>
          {menuOpen && (
            <div className={styles.menu}>
              {questions.map((question, id) => {
                return (
                  <div key={id} className={styles.question}>
                    {question}
                  </div>
                );
              })}
            </div>
          )}
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
