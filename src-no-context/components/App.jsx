import { useEffect, useReducer } from 'react';

import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './StartScreen';
import Questions from './Questions';
import NextQuestion from './NextQuestion';
import Timer from './Timer';
import Progress from './Progress';
import Finished from './Finished';

const initalState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  timer: null,
};

const PER_SEC = 30;

function reducer(state, action) {
  switch (action.type) {
    case 'DATA_RECIVED':
      return { ...state, questions: action.playLoad, status: 'ready' };
    case 'DATA_FAILED':
      return { ...state, status: 'Error' };
    case 'START':
      return {
        ...state,
        status: 'active',
        timer: state.questions.length * PER_SEC,
      };
    case 'ANSWER': // eshkal daram
      //   console.log(state.questions.at(state.index)); 0 ==> question 1
      const question = state.questions.at(state.index);
      return {
        // eshkal daram
        ...state,
        answer: action.playLoad,
        points:
          action.playLoad === question.correctOption
            ? state.points + question.points
            : state.points,
        // اگه ایندکس جوابی
      };
    case 'NEXT_QUESTION':
      return { ...state, index: state.index + 1, answer: null };

    case 'finished':
      return {
        ...state,
        status: 'finished',
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case 'RESET':
      return {
        ...initalState,
        status: 'ready',
        questions: state.questions,
      };
    // timer
    case 'TICK':
      return {
        ...state,
        timer: state.timer - 1,
        status: state.timer === 0 ? 'finished' : state.status,
      };
    default: {
      throw new Error('Action Unknown');
    }
  }
}

function App() {
  const [
    { questions, status, index, answer, points, highScore, timer },
    dispatch,
  ] = useReducer(reducer, initalState);

  const lengthQuestion = questions.length;
  const maxPoints = questions.reduce((acc, cur) => acc + cur.points, 0);

  useEffect(function () {
    fetch('http://localhost:3000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'DATA_RECIVED', playLoad: data }))
      .catch((error) => dispatch({ type: 'Error' }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {/* ...loading */}
        {status === 'Error' && <Error />}
        {status === 'ready' && (
          <StartScreen dispatch={dispatch} numQuestion={lengthQuestion} />
        )}
        {status === 'active' && (
          <>
            <Progress
              max={maxPoints}
              points={points}
              index={index}
              lengthQuestion={lengthQuestion}
              answer={answer}
            />
            <Questions
              answer={answer}
              questions={questions[index]}
              dispatch={dispatch}
            />
            <Timer dispatch={dispatch} timer={timer} />
            <NextQuestion
              lengthQuestion={lengthQuestion}
              index={index}
              answer={answer}
              dispatch={dispatch}
            />
          </>
        )}
        {status === 'finished' && (
          <Finished
            highScore={highScore}
            dispatch={dispatch}
            points={points}
            max={maxPoints}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
