import React ,{useContext} from 'react'
import { QuizContext } from '../Context/AllQuizContext'



const StartMenu = () => {
   const {currentMenu , setCurrentMenu, numberOfQuestions, setNumberOfQuestions}= useContext(QuizContext);

   const handleChange = (event) =>{
    setNumberOfQuestions(event.target.value);
   }

   console.log(numberOfQuestions)
  

  return (
    <div className='menu'>
        
        <input type="number" className="Input"name="numberofQ" placeholder='Enter the number of Questions to take' onChange={handleChange} />
      <button onClick={()=> setCurrentMenu("quiz")}>start Quiz</button>
       
     
    </div>
  )
}

export default StartMenu
