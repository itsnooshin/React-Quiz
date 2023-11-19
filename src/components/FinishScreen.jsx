function FinishScreen({ points, highScore, calculate, dispatch }) {
  console.log();
  const percentage = Math.ceil((points / calculate) * 100);

  let emoji;

  if (percentage === 100) emoji = '🏅';
  if (percentage >= 80 && percentage < 100) emoji = '🎉';
  if (percentage >= 50 && percentage < 80) emoji = '🙃';
  if (percentage >= 0 && percentage < 50) emoji = '😞';
  if (percentage === 0) emoji = '🤦‍♂️';
  return (
    <div>
      <p className="result">
        {emoji} You scored {points} out of {calculate} ( {percentage} % )
      </p>
      <p className="highscore">( Highscore: {highScore} points )</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'reset' })}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default FinishScreen;
