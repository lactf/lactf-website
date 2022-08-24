import React, { useEffect, useState } from "react";

const Countdown = () => {
  let [time, setTime] = useState(1676088000 - Date.now() / 1000);

  useEffect(() => {
    setInterval(() => setTime(1676088000 - Date.now() / 1000), 1000);
  }, time);

  return (
    <div>
      <h1>Timer</h1>
      <p>Days: {Math.floor(time / 86400)}</p>
      <p>
        Hours: {Math.floor((time - 86400 * Math.floor(time / 86400)) / 3600)}
      </p>
      <p>
        Minutes:{" "}
        {Math.floor(
          Math.floor((time - 86400 * Math.floor(time / 86400)) % 3600) / 60
        )}
      </p>
      <p>
        Seconds:{" "}
        {Math.floor(
          Math.floor((time - 86400 * Math.floor(time / 86400)) % 3600) % 60
        )}
      </p>
    </div>
  );
};

export default Countdown;
