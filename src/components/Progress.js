import React from "react";

export default function Progress({
  index,
  questionsNum,
  maxPoints,
  points,
  userAns,
}) {
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
