import React, { useState, useEffect } from 'react';
import './App.css';

const CountdownApp = () => {
  const targetDate = new Date('2023-12-09T18:25:00');
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
    // const days = Math.floor(remainingTime / 86400000);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const getDaysFromRemainingTime = (remainingTime) => {
    const days = Math.floor(remainingTime / 86400000);
    return `${days} Days`;
  };

  return (
    <div className="countdown-container">
    <h1 style>There are still</h1>
    <div className='textbox'>
      <p className="countdown-text">{getDaysFromRemainingTime(remainingTime)}</p>
      <p className="countdown-text">{getRemainingTimeString(remainingTime)}</p>
    </div>
    <h1>Untill Gigi back home</h1>
    </div>
  );
};

export default CountdownApp;
