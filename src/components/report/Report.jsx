import React, { useState, useEffect } from 'react';
import './report.css';


const Report = () => {
  const [workoutCount, setWorkoutCount] = useState(0);
  const [kcalCount, setKcalCount] = useState(0);
  const [minuteCount, setMinuteCount] = useState(0);

  useEffect(() => {
    // Function to increment counts every second
    const intervalId = setInterval(() => {
      setWorkoutCount((prevCount) => prevCount + 3);
      setKcalCount((prevCount) => prevCount + 8);
      setMinuteCount((prevCount) => prevCount + 1);
    }, 60000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div className='report__section'>
      <h1 className='heading'>WORKOUT REPORT</h1>
      <div className='reports'>
        <div className='report__workout'>
          <h2>{workoutCount}</h2>
          <span>WORKOUT</span>
        </div>
        <div className='report__kcal'>
          <h2>{kcalCount}</h2>
          <span>KCAL</span>
        </div>
        <div className='report__minute'>
          <h2>{minuteCount}</h2>
          <span>MINUTE(S)</span>
        </div>
      </div>
    </div>
  );
};

export default Report;
