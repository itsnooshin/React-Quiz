function Progress({ index, numQuestions, points, calculate, answer }) {
  return (
    <div className="progress">
      <progress
        max={numQuestions}
        value={index + (answer !== null ? 1 : 0)}
      ></progress>
      <p>
        {' '}
        Question <strong>{index + 1}</strong> {numQuestions}
      </p>
      <p>
        {' '}
        <strong> {points} </strong> / {calculate}
      </p>
    </div>
  );
}

export default Progress;
