import { useEffect } from 'react';

function Timer({ dispatch, seconds }) {
  const min = Math.floor(seconds / 60);
  console.log(min);
  const second = Math.floor(seconds % 60);
  console.log(second);

  useEffect(() => {
    const Timer = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);

    return () => clearInterval(Timer);
  }, [dispatch]);

  return (
    <div>
      <button className="btn timer">
        {' '}
        {min < 10 ? `0${min}` : min}: {second < 10 ? `0${second}` : second}{' '}
      </button>
    </div>
  );
}

export default Timer;
