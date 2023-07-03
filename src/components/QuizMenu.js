import React, {useContext , useState, useEffect, useCallback } from 'react';
import { QuizContext } from '../Context/AllQuizContext';

import axios from 'axios';

const QuizMenu = () => {
    const {currentMenu , setCurrentMenu, score, setScore, selectedQuestions, setSelectedQuestions, setNumberOfQuestions, numberOfQuestions}= useContext(QuizContext);
    const [currentQuestionNumber, setCurrentQuestionNumber]=useState(0);
    const [optionChosen, setOptionChosen]=useState("");
    const [questions, setQuestions]=useState([]);
     
    useEffect(() => {
        axios.get('http://localhost:3001/Questions') 
          .then((response) => setQuestions(response.data));
    
      }, [numberOfQuestions ]);

    

     const getRandomQuestions = useCallback((numQuestions) => {
        const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
        return shuffledQuestions.slice(0, numQuestions);
      },[questions]);
    
    useEffect(() => {
        const randomQuestions = getRandomQuestions(numberOfQuestions);
        
        setSelectedQuestions(randomQuestions);
      }, [numberOfQuestions,setSelectedQuestions , getRandomQuestions]);
    
     
      console.log(numberOfQuestions)
      console.log(questions)
      console.log(selectedQuestions)
      
    const nextQuestion = () =>{
        if(selectedQuestions[currentQuestionNumber].Answer===optionChosen ){
            setScore(score +1 )
        }
          
        setCurrentQuestionNumber(currentQuestionNumber + 1);

        }

        const finishQuiz = () =>{
            if(selectedQuestions[currentQuestionNumber].Answer===optionChosen ){
                setScore(score +1 )
            }
              
            setCurrentMenu("End");
    
            }
    
   return (
    <div className='quiz'>
        <span>{currentQuestionNumber} of {selectedQuestions.length} Answered </span>
      <h1>{selectedQuestions[currentQuestionNumber]?.prompt}</h1>
      <div className='option'>
        <button onClick={()=>setOptionChosen("A")}>{selectedQuestions[currentQuestionNumber]?.optionA}</button>
        <button onClick={()=>setOptionChosen("B")}>{selectedQuestions[currentQuestionNumber]?.optionB}</button>
        <button onClick={()=>setOptionChosen("C")}>{selectedQuestions[currentQuestionNumber]?.optionC}</button>
        <button onClick={()=>setOptionChosen("D")}>{selectedQuestions[currentQuestionNumber]?.optionD}</button>
      </div>
      {currentQuestionNumber=== selectedQuestions.length -1 ? (<button onClick={finishQuiz}>Finish Quiz</button>) :(<button onClick={nextQuestion}>Next Question</button>)}
      
    </div>
  )
}

export default QuizMenu
