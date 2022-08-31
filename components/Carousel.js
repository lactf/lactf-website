import { useEffect, useState } from "react";

import Speaker from "./Speaker";

import styles from "../styles/Carousel.module.css";

import data from "../data/speakers.js";

export default function Carousel() {
  let speakers = data["speakers"];
  let [index, setIndex] = useState(0);

  return (
    <>
      <div className={styles.slideshow}>
        <a
          className={styles.prev}
          onClick={() =>
            setIndex((index + (speakers.length - 1)) % speakers.length)
          }
        >
          &#10094;
        </a>
        <Speaker
          name={speakers[index].name}
          title={speakers[index].title}
          info={speakers[index].info}
          image={speakers[index].image}
        />
        <a
          className={styles.next}
          onClick={() => setIndex((index + 1) % speakers.length)}
        >
          &#10095;
        </a>
      </div>

      <div className={styles.dots}>
        {speakers.map((speakers, currIndex) => (
          <span
            key={speakers.name}
            className={index === currIndex ? styles.active : styles.dot}
            onClick={() => setIndex(currIndex)}
          ></span>
        ))}
      </div>
    </>
  );
}
