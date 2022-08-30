import React from "react";
import Image from "next/image";
import eggert from "../public/images/eggert.jpg";

import styles from "../styles/Speaker.module.css";

export default function Speaker(props) {
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <Image src={props.image} height={330} width={330} />
      </div>
      <div className={styles.info}>
        <h2>{props.name}</h2>
        <h3>{props.title}</h3>
        <p>
          {props.info}
        </p>
      </div>
    </div>
  );
}
