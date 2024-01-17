import { useEffect } from 'react';

function Timer({ dispatch, timer }) {
  const minute = Math.floor(timer / 60);
  const seconds = timer % 60;

  useEffect(() => {
    const Interval = setInterval(() => {
      dispatch({ type: 'TICK' });
    }, 1000);
    return () => {
      clearInterval(Interval);
    };
  }, [dispatch]);

  return (
    <div className="timer">
      {minute < 10 && '0'}
      {minute}:{seconds < 10 && '0'}
      {seconds}
    </div>
  );
}

export default Timer;
