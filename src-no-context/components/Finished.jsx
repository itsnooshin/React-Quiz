function Finished({ dispatch, points, max, highScore }) {
  console.log(points, max);
  const percentage = Math.ceil((points / max) * 100);

  return (
    <>
      <p className="result">
        {' '}
        You scored {points} out of {max} ( {percentage} % )
      </p>

      <p className="highscore">( Highscore: {highScore} points )</p>
      <button
        onClick={() => dispatch({ type: 'RESET' })}
        className="btn btn-ui"
      >
        Restart Quiz
      </button>
    </>
  );
}

export default Finished;
