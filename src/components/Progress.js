import React from "react";
import { useQuiz } from "../context/QuizContext";

export default function Progress() {
  const { index, questionsNum, maxPoints, points, userAns } = useQuiz();
  return (
    <header className="progress">
      <progress max={questionsNum} value={index + Number(userAns !== null)} />
      <p>
        Question <strong>{index + 1} </strong>/ {questionsNum}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}
