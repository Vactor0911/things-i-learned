import { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    const meridiem = hours > 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, "0");

    return(`${meridiem} ${hours}:${minutes}:${seconds}`);
  };

  return (
    <>
      <div className="container">
        <div className="clock">
          <h1>{formatTime()}</h1>
        </div>
      </div>
    </>
  );
};

export default DigitalClock;
