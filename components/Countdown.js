import { useEffect, useState } from "react";

import styles from "../styles/Countdown.module.css";

const Countdown = () => {
  let [time, setTime] = useState(0);

  useEffect(() => {
    if (time === 0) setTime(1676088000 - Date.now() / 1000);
    setInterval(() => setTime(1676088000 - Date.now() / 1000), 5000);
  }, [time]);

  return (
    <div className={styles.timerContainer}>
      <ul className={styles.timer}>
        <li>
          <p className={styles.countdownNum}>{Math.floor(time / 86400)}</p>
          <span className={styles.countdownLabel}>Days</span>
        </li>
        <li>
          <p className={styles.countdownNum}>
            {String(
              Math.floor((time - 86400 * Math.floor(time / 86400)) / 3600)
            ).length < 2
              ? "0" +
                Math.floor((time - 86400 * Math.floor(time / 86400)) / 3600)
              : Math.floor((time - 86400 * Math.floor(time / 86400)) / 3600)}
          </p>
          <span className={styles.countdownLabel}>Hours</span>
        </li>
        <li>
          <p className={styles.countdownNum}>
            {String(
              Math.floor(
                Math.floor((time - 86400 * Math.floor(time / 86400)) % 3600) /
                  60
              )
            ).length < 2
              ? "0" +
                Math.floor(
                  Math.floor((time - 86400 * Math.floor(time / 86400)) % 3600) /
                    60
                )
              : Math.floor(
                  Math.floor((time - 86400 * Math.floor(time / 86400)) % 3600) /
                    60
                )}
          </p>
          <span className={styles.countdownLabel}>Minutes</span>
        </li>
      </ul>
    </div>
  );
};

export default Countdown;
