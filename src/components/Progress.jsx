import { useQuiz } from '../context/QuizContext';

function Progress() {
  const { points, index, numQuestions, answer, maxPossiblePoints } = useQuiz();
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong> {index + 1} </strong> / {numQuestions}
      </p>
      <p>
        {' '}
        <strong>{points}</strong> / {maxPossiblePoints} points
      </p>
    </header>
  );
}

export default Progress;
