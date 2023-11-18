function Questions({ questions, numQuestions, index }) {
  console.log(questions, length, index);
  const answers = questions.options;
  return (
    <>
      <div className="progress">
        <progress max={280}></progress>
        <p>
          {' '}
          Question <strong>{index + 1}</strong> {numQuestions}
        </p>
        <p>
          {' '}
          <strong> 0</strong> / 280
        </p>
      </div>

      <h4>{questions.question}</h4>
      <div className="options">
        {answers.map((element, i) => (
          <button className="btn btn-option" key={i}>
            {element}
          </button>
        ))}
      </div>
      <button className="btn timer">Timer</button>
    </>
  );
}

export default Questions;
