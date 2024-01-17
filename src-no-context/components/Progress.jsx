function Progress({ answer, max, index, lengthQuestion, points }) {


  return (
    <header className="progress">
      <progress
        max={lengthQuestion}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong> {index + 1} </strong> / {lengthQuestion}
      </p>
      <p>
        {' '}
        <strong>{points}</strong> / {max} points
      </p>
    </header>
  );
}

export default Progress;
