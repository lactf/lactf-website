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
            onClick={() =>
              (window.location.href = "https://discord.gg/qD6vmsgECn")
            }
            className={styles.discord}
          >
            <a href="https://discord.gg/qD6vmsgECn">Join Us</a>
          </button>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
        <li>
          <Link href="#sponsors">Sponsors</Link>
        </li>
        <li>
          <Link href="#speakers">Speakers</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
