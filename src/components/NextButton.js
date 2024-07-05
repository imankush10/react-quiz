import { useQuiz } from "../context/QuizContext";

export default function NextButton() {
  const { userAns, dispatch, index, questionsNum } = useQuiz();
  if (userAns === null) return;
  if (index < questionsNum - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if(index === questionsNum-1)
    return(
      <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "finish" })}
    >
      Finish
    </button>
  )
}
