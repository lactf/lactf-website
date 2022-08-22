import Navbar from "../components/Navbar";

import styles from "../styles/Error.module.css";

export default function Error() {
  return (
    <div>
      <Navbar />
      <main className={styles.error}>
        <h1>Error 404: Flag not found!</h1>
        <p>
          Click{" "}
          <a href="/" className={styles.home}>
            here
          </a>{" "}
          to return to the home page.
        </p>
      </main>
    </div>
  );
}
