import { useQuiz } from '../context/QuizContext';
import Options from './Options';

function Questions() {
  const { questions, index } = useQuiz();

  const question = questions[index];
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} /> 
    </div>
  );
}

export default Questions;
