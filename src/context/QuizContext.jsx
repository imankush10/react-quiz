import { createContext, useContext, useReducer } from "react";
import questions from "../constants/questions";

const QuizContext = createContext();

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: questions.questions,
  userAns: null,
  index: 0,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
  status: "ready",
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAns":
      const question = state.questions[state.index];
      return {
        ...state,
        userAns: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        userAns: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initialState,
        highscore: state.highscore,
        status: "ready",
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Invalid");
  }
}
export function QuizContextProvider({ children }) {
  const [
    { questions, status, index, userAns, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const questionsNum = questions.length;
  const maxPoints = questions.reduce(
    (acm, question) => acm + question.points,
    0
  );

  return (
    <QuizContext.Provider
      value={{
        questionsNum,
        status,
        dispatch,
        index,
        maxPoints,
        points,
        userAns,
        question: questions[index],
        secondsRemaining,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext);
}
