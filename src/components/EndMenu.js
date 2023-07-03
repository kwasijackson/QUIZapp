import React , {useContext , useState} from 'react'
import { QuizContext } from '../Context/AllQuizContext';
import { Questions } from '../QuestionBank';

const EndMenu = () => {
    const {currentMenu , setCurrentMenu, score, setScore, selectedQuestions,setNumberOfQuestions}= useContext(QuizContext);
    const retakeQuiz = () =>{
        setCurrentMenu("main");
        setScore(0);
        setNumberOfQuestions(2);
    }
  return (
    <div className='Endmenu'>
      <h1>QUIZ ENDED</h1>
      <h3>You scored {score} out of {selectedQuestions.length}</h3>
      <button onClick={retakeQuiz}>Retake Quiz</button>
    </div>
  )
}

export default EndMenu
