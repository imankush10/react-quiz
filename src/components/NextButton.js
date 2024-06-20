export default function NextButton({ userAns, dispatch, index, questionsNum }) {
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
