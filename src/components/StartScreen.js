import React from 'react'
import { useQuiz } from '../context/QuizContext'

export default function StartScreen() {
  const {questionsNum, dispatch} = useQuiz();
  return (
    <div className='start'>
        <h3>Welcome to The React Quiz!</h3>
        <h2>{questionsNum} questions to test your React mastery</h2>
        <button className='btn btn-ui' onClick={()=>dispatch({type:"start"})}>Let's start!</button>
    </div>
  )
}
