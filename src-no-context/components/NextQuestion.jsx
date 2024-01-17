function NextQuestion({ lengthQuestion, index, dispatch, answer }) {
  if (answer === null) return null;

  if (index < lengthQuestion - 1) {
    return (
      <button
        onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
        className="btn btn-ui"
      >
        Next
      </button>
    );
  }

  if (index === lengthQuestion - 1) {
    return (
      <button
        onClick={() => dispatch({ type: 'finished' })}
        className="btn btn-ui"
      >
        Finished
      </button>
    );
  }
}

export default NextQuestion;
