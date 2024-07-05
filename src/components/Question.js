import { useQuiz } from "../context/QuizContext";
import Option from "./Option";

export default function Question() {
  const { question } = useQuiz();
  return (
    <div>
      <h4>{question.question}</h4>
      <Option />
    </div>
  );
}
