import Options from './Options';

function Questions({ questions, answer, dispatch, points }) {
  const answers = questions.options;

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
        </>
      ) : (
        ''
      )}
    </>
  );
}

export default Questions;
