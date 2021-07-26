import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { links } from "../data/data";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

//Animations
const containerVariants = {
  initial: {},
  animate: {}
};
const phoneVariants = {
  initial: { scale: 2.9, position: "fixed" },
  animate: {
    scale: 1,
    position: "relative",
    transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }
  }
};
const textVariants = {
  initial: { y: "70px" },
  animate: { y: 0, transition: { duration: 0.8, delay: 0.8 } }
};
const boxVariants = {
  initial: { backgroundColor: "#2ac940", scale: 1 },
  animate: {
    backgroundColor: "#fff",
    scale: 1.6,
    transition: { duration: 0.8, delay: 1 }
  }
};
const boxAnimVariants = {
  initial: { y: 0, x: "-50%" },
  animate: { y: "-54px", transition: { duration: 0.8, delay: 1 } }
};

export default function Home() {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className={styles.container}
    >
      <Head>
        <title>Mobile App Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <a>
            <Image width="32" height="32" src="/Logo.png" />
          </a>
        </Link>
        <button className={styles.hamburger}>
          <Image width="32" height="32" src="/Code Button.png" />
        </button>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            {links.map((link, index) => (
              <li key={index} className={styles.menu__item}>
                <Link href="/" className={styles.menu__link}>
                  <a>{link}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.hero__heading}>
            <div className={styles.hero__line1}>
              <motion.span variants={textVariants}>
                Send and receive money
              </motion.span>
            </div>
            <div className={styles.hero__line2}>
              <motion.span variants={textVariants}>
                without thinking about it
              </motion.span>
            </div>
          </h1>
          <div className={styles.codebtn}>
            {/*<Image width="64" height="64" src="/Code Button.png" />*/}
            <motion.div variants={boxVariants} className={styles.box}>
              <motion.div className={styles.boxAnim} variants={boxAnimVariants}>
                <motion.img
                  className={styles.scanner}
                  width="48"
                  height="48"
                  src="/Scanner 1.svg"
                />
                <motion.img
                  className={styles.qr}
                  width="54"
                  height="49"
                  src="/QR code 1.svg"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section className={styles.showcase}>
          <motion.div variants={phoneVariants} className={styles.phone} />
        </section>
      </main>
    </motion.div>
  );
}
