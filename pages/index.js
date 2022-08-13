import Navbar from "../components/Navbar";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <h1>Welcome to LA CTF!</h1>
        <p>
          LA CTF is a jeopardy-style capture-the-flag (CTF) style cybersecurity
          competition hosted ACM Cyber @ UCLA & Psi Beta Rho!
        </p>

        <h2 id="about">Join Us</h2>
        <p>
          Want to participate in LA CTF? Make sure to join our Discord to stay
          up to date with the latest notifications about the coolest
          cybersecurity competition in southern California!
        </p>

        <h2 id="speakers">Speakers</h2>
        <p>
          Here are some of the exciting speakers that will be attending LA CTF!
        </p>

        <h2 id="sponsors">Sponsors</h2>
        <p>
          Here are some of the amazing companies that help make LA CTF happen!
        </p>
      </main>

      <footer className={styles.footer}>
        <p>© ACM Cyber at UCLA 2022</p>
      </footer>
    </div>
  );
}
