import Options from './Options';

function Questions({ questions, answer, dispatch, points }) {
  const answers = questions?.options;

  if (!questions) {
    console.log('hhhh');
  }

  return (
    <>
      {questions !== null ? (
        <>
          <h4>{questions.question}</h4>
          <Options
            questions={questions}
            answers={answers}
            answer={answer}
            dispatch={dispatch}
            points={points}
          />
          <div>
            <button className="btn timer">Timer</button>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  );
}

export default Questions;
