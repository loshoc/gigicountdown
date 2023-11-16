import React, { useState, useEffect } from 'react';

const CountdownApp = () => {
  const targetDate = new Date('2023-12-09T17:25:00');
  const [remainingTime, setRemainingTime] = useState(targetDate - new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newRemainingTime = targetDate - new Date();
      setRemainingTime(newRemainingTime);

      if (newRemainingTime <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getRemainingTimeString = (remainingTime) => {
    const seconds = Math.floor(remainingTime / 1000) % 60;
    const minutes = Math.floor(remainingTime / 60000) % 60;
    const hours = Math.floor(remainingTime / 3600000);

    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Countdown to 2023-12-09 17:25</h1>
      <p>Remaining time: {getRemainingTimeString(remainingTime)}</p>
    </div>
  );
};

export default CountdownApp;