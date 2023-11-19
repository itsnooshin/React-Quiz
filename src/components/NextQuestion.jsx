function NextQuestion({ answer, dispatch }) {
  return (
    <div>
      {answer !== null ? (
        <button
          onClick={() => {
            dispatch({type : 'nextQuestion'});
          }}
          className="btn btn-ui"
        >
          Next
        </button>
      ) : (
        ''
      )}
    </div>
  );
}

export default NextQuestion;
