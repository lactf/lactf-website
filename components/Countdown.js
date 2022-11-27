import { useEffect, useState } from "react";

import styles from "../styles/Countdown.module.css";

const Countdown = () => {
  let [time, setTime] = useState(0);

  let updateTime = () => setTime(1676088000 - Date.now() / 1000);
  useEffect(() => {
    if (time === 0) updateTime();
    setInterval(updateTime, 5000);
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
            {Math.floor((time % 86400) / 3600)
              .toString()
              .padStart(2, "0")}
          </p>
          <span className={styles.countdownLabel}>Hours</span>
        </li>
        <li>
          <p className={styles.countdownNum}>
            {Math.floor(Math.floor((time % 86400) % 3600) / 60)
              .toString()
              .padStart(2, "0")}
          </p>
          <span className={styles.countdownLabel}>Minutes</span>
        </li>
      </ul>
    </div>
  );
};

export default Countdown;
