import React from "react";
import Image from "next/image";

import styles from "../styles/Speaker.module.css";

export default function Speaker(props) {
  return (
    <div className={styles.main}>
      <div className={styles.containerLeft}>
        <div className={styles.image}>
          <Image src={props.image} alt="A cool LA CTF speaker" />
        </div>
      </div>
      <div className={styles.containerRight}>
        <div className={styles.info}>
          <h2>{props.name}</h2>
          <h3>{props.title}</h3>
          <p>{props.info}</p>
        </div>
      </div>
    </div>
  );
}
