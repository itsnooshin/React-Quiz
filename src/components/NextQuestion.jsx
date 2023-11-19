function NextQuestion({ dispatch, numQuestions, index }) {
  const isLastQuestion = index === numQuestions - 1;

  const handleFinish = () => {
    const actionType = isLastQuestion ? 'finished' : 'nextQuestion';
    dispatch({ type: actionType });
  };

  return (
    <div>
      <button onClick={handleFinish} className="btn btn-ui">
        {isLastQuestion ? 'Finish' : 'Next'}
      </button>
    </div>
  );
}

export default NextQuestion;
