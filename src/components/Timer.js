import React, { useEffect } from "react";
import { useQuiz } from "../context/QuizContext";

export default function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();

  const mins = String(Math.floor(secondsRemaining / 60));
  const secs = String(secondsRemaining % 60);

  useEffect(() => {
    const timer = setInterval(() => dispatch({ type: "tick" }), 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins.padStart(2, "0")}:{secs.padStart(2, 0)}
    </div>
  );
}
