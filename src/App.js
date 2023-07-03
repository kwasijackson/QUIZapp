import {useState, useContext } from 'react'
import StartMenu from './components/StartMenu';
import EndMenu from './components/EndMenu';
import QuizMenu from './components/QuizMenu';
import { QuizContext } from './Context/AllQuizContext';
import './App.css';
function App() {
  const [currentMenu, setCurrentMenu]=useState("main");
  const [score, setScore]=useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [numberOfQuestions, setNumberOfQuestions]=useState(2);
  return (
 
    <div className="App">
        <h1>QUIZ</h1>
       <QuizContext.Provider value={{currentMenu , setCurrentMenu ,score, setScore ,selectedQuestions, setSelectedQuestions, numberOfQuestions, setNumberOfQuestions}}>
      {currentMenu==="main" && <StartMenu />}
      {currentMenu==="quiz" && <QuizMenu />}
      {currentMenu==="End" && <EndMenu />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
