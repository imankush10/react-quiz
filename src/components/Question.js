import Option from "./Option";

export default function Question({ question, dispatch, userAns }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} dispatch={dispatch} userAns={userAns} />
    </div>
  );
}
