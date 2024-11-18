import Link from "next/link";

import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <input
        className={styles.menutoggle}
        id="menu-toggle"
        type="checkbox"
      ></input>
      <label className={styles.menucontainer} htmlFor="menu-toggle">
        <div className={styles.menubutton}></div>
      </label>
      <ul>
        <li>
          <button
            onClick={() => (window.location.href = "/discord")}
            className={styles.discord}
          >
            <Link href="/discord">Discord</Link>
          </button>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
        <li>
          <Link href="/#contact">Archive</Link>
        </li>
        <li>
          <Link href="/#sponsors">Sponsors</Link>
        </li>
        <li>
          <Link href="/#prizes">Prizes</Link>
        </li>
        <li>
          <Link href="/#speakers">Speakers</Link>
        </li>
        <li>
          <Link href="/#about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
