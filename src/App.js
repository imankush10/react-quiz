import { QuizContextProvider } from "./context/QuizContext";
import QuizApp from "./components/QuizApp";

function App() {
  return (
    <QuizContextProvider>
      <QuizApp />
    </QuizContextProvider>
  );
}

export default App;
