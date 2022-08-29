import React from "react";
import Image from "next/image";
import eggert from "../public/images/eggert.jpg";

import styles from "../styles/Speaker.module.css";

export default function Speaker() {
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <Image src={eggert} height={330} width={330} />
      </div>
      <div className={styles.info}>
        <h2>Dr. Paul Eggert</h2>
        <h3>UCLA Computer Science</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
