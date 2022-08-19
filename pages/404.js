import Link from "next/link";
import Navbar from "../components/Navbar";

import styles from "../styles/Error.module.css";

export default function Error() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <h1>Error 404: Flag not found!</h1>
        <Link href="/">
          <p>Click here to return to the home page</p>
        </Link>
      </main>
    </div>
  );
}
