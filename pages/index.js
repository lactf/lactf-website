import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>LA CTF Home</title>
        <meta
          name="description"
          content="LA CTF is a jeopardy-style capture-the-flag (CTF) style cybersecurity competition hosted ACM Cyber @ UCLA & Psi Beta Rho!"
        />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Welcome to LA CTF!</h1>
        <p>
          LA CTF is a jeopardy-style capture-the-flag (CTF) style cybersecurity
          competition hosted ACM Cyber @ UCLA & Psi Beta Rho!
        </p>

        <h2>Join Us</h2>

        <h2>Speakers</h2>

        <h2>Sponsors</h2>
      </main>

      <footer className={styles.footer}>
        <p>© ACM Cyber at UCLA 2022</p>
      </footer>
    </div>
  );
}
