import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1>Welcome to LA CTF!</h1>
        <p>
          LA CTF is a jeopardy-style capture-the-flag (CTF) style cybersecurity
          competition hosted ACM Cyber @ UCLA & Psi Beta Rho!
        </p>

        <h2 id="about">Join Us</h2>

        <h2 id="speakers">Speakers</h2>

        <h2 id="sponsors">Sponsors</h2>
      </main>

      <footer className={styles.footer}>
        <p>© ACM Cyber at UCLA 2022</p>
      </footer>
    </div>
  );
}
