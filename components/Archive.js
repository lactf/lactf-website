import data from "../data/archive.js";

import styles from "../styles/Sponsors.module.css";

const Archive = () => {
  return (
    <div className={styles.sponsorsFlexContainer}>
      {data.entries.map((entry) => {
        return (
          <>
            <h1>{entry.year}</h1>

            <div>
              <a href={entry.website}>Website</a>
              <a href={entry.platform}>Platform</a>
              <a href={entry.github}>GitHub</a>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Archive;
