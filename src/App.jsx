import Header from './Header.jsx';
import { useEffect, useReducer } from 'react';

import Loader from './Loader.jsx';
import Error from './Error.jsx';
import StartScreen from './StartScreen.jsx';

const initalState = {
  questions: [],
  //set status for load questions
  status: 'loading', // 'loading' , 'error'
  //, ready ==> زمانیه که دیتا رسید we start the quiz 'active' state quiz actually is running
  // finished  when all the question is ended
};

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payLoad, status: 'ready' };
    case 'dataFailed':
      return { ...state, status: 'error' };
    default:
      throw new Error('Unknown action type');
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initalState);
  console.log(state);
  const { questions, status } = state;
  console.log(questions, status);
  useEffect(() => {
    fetch('http://localhost:3000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payLoad: data }))
      .catch((err) => dispatch({ type: 'dataFailed' }));
    return () => {};
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="main">
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen />}
      </main>
    </div>
  );
}
export default App;
