function Options({ answer, questions, dispatch }) {
//   console.log(questions, answer);
  //   correctOption question points
  return (
    <>
      <div className="options">
        {questions?.options.map((options, index) => (
          <button
            disabled={answer !== null}
            onClick={() => dispatch({ type: 'ANSWER', playLoad: index })}
            className={`btn btn-option ${index === answer ? 'answer' : ''} ${
              answer !== null &&
              (index === questions.correctOption ? 'correct' : 'wrong')
            }  `}
            key={options}
          >
            {options}
          </button>
        ))}
      </div>
      {/* {answer !== null && <button className="btn btn-ui"> Next</button>} */}
    </>
  );
}

export default Options;
