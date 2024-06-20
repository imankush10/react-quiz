import React from "react";

export default function Option({ question, dispatch, userAns }) {
  let hasAnswerd = userAns !== null;
  return (
    <div className="options">
      {question.options.map((option, idx) => (
        <button
          className={`btn btn-option ${userAns === idx ? "answer" : ""} ${
            hasAnswerd
              ? idx === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAns", payload: idx })}
          disabled={hasAnswerd}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
