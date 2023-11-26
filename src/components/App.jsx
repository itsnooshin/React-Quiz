import Header from './Header.jsx';
import { useEffect, useReducer } from 'react';

import Loader from './Loader.jsx';
import Error from './Error.jsx';
import StartScreen from './StartScreen.jsx';
import Questions from './Questions.jsx';
import NextQuestion from './NextQuestion.jsx';
import Progress from './Progress.jsx';
import FinishScreen from './FinishScreen.jsx';
import Timer from './Timer.jsx';
import Footer from './Footer.jsx';
const SEC__PER_QUESTIONS = 30;
const initalState = {
  questions: [],
  //set status for load questions
  status: 'loading', // 'loading' , 'error'
  //, ready ==> زمانیه که دیتا رسید we start the quiz 'active' state quiz actually is running
  // finished  when all the question is ended
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  seconds: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payLoad, status: 'ready' };
    case 'dataFailed':
      return { ...state, status: 'error' };
    case 'start':
      return {
        ...state,
        status: 'active',
        seconds: state.questions.length * SEC__PER_QUESTIONS,
      };
    case 'newAnswer':
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payLoad,
        points:
          action.payLoad === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null };

    case 'finished':
      return {
        ...state,
        status: 'finished',
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };

    case 'reset':
      return {
        ...state,
        status: 'ready',
        index: 0,
        answer: null,
        points: 0,
        highScore: 0,
      };
    case 'tick':
      return {
        ...state,
        seconds: state.seconds - 1,
        status: state.seconds === 0 ? 'finished' : state.status,
      };

    default:
      throw new Error('Unknown action type');
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initalState);
  const { questions, status, index, answer, points, highScore, seconds } =
    state;

  const numQuestions = questions.length;
  //
  const calculate = questions.reduce((acc, cur) => acc + cur.points, 0);

  useEffect(() => {
    fetch('http://localhost:3000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payLoad: data }))
      .catch((err) => dispatch({ type: 'dataFailed' }));
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="main">
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === 'active' && (
          <>
            <Progress
              index={index}
              points={points}
              calculate={calculate}
              numQuestions={numQuestions}
              answer={answer}
            />
            <Questions
              numQuestions={numQuestions}
              questions={questions[index]}
              index={index}
              calculate={calculate}
              answer={answer}
              dispatch={dispatch}
              points={points}
            />
            <Footer>
              <Timer dispatch={dispatch} seconds={seconds} />
              <NextQuestion
                dispatch={dispatch}
                question={questions}
                index={index}
                numQuestions={numQuestions}
                answer={answer}
              />
            </Footer>
          </>
        )}

        {status === 'finished' && (
          <FinishScreen
            points={points}
            calculate={calculate}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </main>
    </div>
  );
}
export default App;
