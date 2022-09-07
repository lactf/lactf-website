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
          <span className={styles.labelDays}>Days</span>
          <span className={styles.days}>{Math.floor(time / 86400)}</span>
        </li>
        <li>
          <span className={styles.labelHours}>Hours</span>
          <span className={styles.hours}>
            {String(
              Math.floor((time - 86400 * Math.floor(time / 86400)) / 3600)
            ).length < 2
              ? "0" +
                Math.floor((time - 86400 * Math.floor(time / 86400)) / 3600)
              : Math.floor((time - 86400 * Math.floor(time / 86400)) / 3600)}
          </span>
        </li>
        <li>
          <span className={styles.labelMinutes}>Minutes</span>
          <span className={styles.minutes}>
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
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Countdown;
