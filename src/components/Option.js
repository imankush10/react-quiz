import React from "react";
import { useQuiz } from "../context/QuizContext";

export default function Option() {
  const { question, dispatch, userAns } = useQuiz();
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
