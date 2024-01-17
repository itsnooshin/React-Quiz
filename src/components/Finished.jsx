import { useQuiz } from '../context/QuizContext';

function Finished() {
  const { highScore, dispatch,  points, maxPossiblePoints } = useQuiz();
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);

  return (
    <>
      <p className="result">
        {' '}
        You scored {points} out of {maxPossiblePoints} ( {percentage} % )
      </p>

      <p className="highscore">( Highscore: {highScore} points )</p>
      <button
        onClick={() => dispatch({ type: 'reset' })}
        className="btn btn-ui"
      >
        Restart Quiz
      </button>
    </>
  );
}

export default Finished;
