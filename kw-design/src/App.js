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
    const hours = Math.floor(remainingTime / 3600000) % 24;
    const days = Math.floor(remainingTime / 86400000);

    return `${days}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
    <p>There are still</p>
    <div>
      <p>Remaining time: {getRemainingTimeString(remainingTime)}</p>
    </div>
    <p>Untill Gigi kiss me</p>
    </>
  );
};

export default CountdownApp;
