import { useQuiz } from '../context/QuizContext';

function NextQuestion() {
  const { numQuestions, index, dispatch, answer } = useQuiz();
  if (answer === null) return null;

  if (index < numQuestions - 1) {
    return (
      <button
        onClick={() => dispatch({ type: 'nextQuestion' })}
        className="btn btn-ui"
      >
        Next
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button
        onClick={() => dispatch({ type: 'finish' })}
        className="btn btn-ui"
      >
        Finished
      </button>
    );
  }
}

export default NextQuestion;
