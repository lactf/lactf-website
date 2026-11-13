import Link from "next/link";
import { NextSeo } from "next-seo";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";

import styles from "../styles/Error.module.css";

export default function Error() {
  return (
    <div>
      <NextSeo title="404 | LA CTF" noindex />
      <Navbar />
      <main className={styles.error}>
        <div className={styles.card}>
          <span className={styles.code}>404</span>
          <h1 className={styles.title}>Flag not found!</h1>
          <p className={styles.desc}>
            Looks like this page wandered off into the desert.
          </p>
          <Link href="/">
            <a className={styles.homeButton}>Back to home</a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
