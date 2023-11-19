function FinishScreen({ points, calculate }) {
  console.log();
  const perce = Math.ceil((points / calculate) * 100);

  return (
    <div>
      <p className="result">
        🏅 You scored {points} out of {calculate} ( {perce} % )
      </p>
      <p className="highscore">( Highscore: {points} points )</p>
      <button className="btn btn-ui">Restart</button>
    </div>
  );
}

export default FinishScreen;
