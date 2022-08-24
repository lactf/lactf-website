import Link from "next/link";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";

import styles from "../styles/Error.module.css";

export default function Error() {
  return (
    <div>
      <Navbar />
      <main className={styles.error}>
        <h1>Error 404: Flag not found!</h1>
        <p className={styles.home}>
          Click <Link href="/">here</Link> to return to the home page.
        </p>
      </main>
      <Footer />
    </div>
  );
}
