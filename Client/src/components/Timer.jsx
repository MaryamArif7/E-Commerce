import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ endTime }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(endTime) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);


 

  return (
    <div className="">
      {Object.keys(timeLeft).length ? (
        <>
          
          <div className='text-2xl -ml-7 flex font-extrabold gap-5'>
        <h1>{`${timeLeft.days || '00'}`}</h1>
        <span className='text-red-600'>:</span>
        <h1>{`${timeLeft.hours || '00'}`}</h1>
        <span className='text-red-600'>:</span>
        <h1>{`${timeLeft.minutes|| '00'}`}</h1>
        <span className='text-red-600'>:</span>
        <h1>{`${timeLeft.seconds || '00'}`}</h1>
                 
          </div>
        </>
      ) : (
        <span>Sale Ended!</span>
      )}
    </div>
  );
};

export default CountdownTimer;
