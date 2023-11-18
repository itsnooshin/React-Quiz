function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn" onClick={() => dispatch({ type: 'start' })}>
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;
