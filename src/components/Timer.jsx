import { useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';

function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();

  const minute = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const Interval = setInterval(() => {
      dispatch({ type: 'tick' });
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
