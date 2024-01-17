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
import { useQuiz } from '../context/QuizContext';

function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {/* ...loading... */}
        {status === 'Error' && <Error />}
        {status === 'ready' && <StartScreen />}

        {status === 'active' && (
          <>
            <Progress />
            <Questions />
            <Timer />
            <NextQuestion />
          </>
        )}
        {status === 'finished' && <Finished />}
      </Main>
    </div>
  );
}

export default App;
