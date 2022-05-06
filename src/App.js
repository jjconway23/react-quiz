import React from 'react';
import Homepage from "./components/Homepage"
import QuestionsContainer from "./components/QuestionsContainer"
import './App.css';

function App() {
  const [startGame, setStartGame] = React.useState(false) 
  const [questionsData,setQuestionsData] = React.useState([])
  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=11&difficulty=medium&type=multiple")
        .then(res => res.json())
        .then(data => setQuestionsData(data.results))
  }, [])

  function startGameBtn(){
    setStartGame( prevState => !prevState)
  }
  
  

    


  const questionDiv = questionsData.map( container => {
      const editedQuestion = {
        question: container.question,
    }; 
    const answerOptions = [...container.incorrect_answers];
    editedQuestion.answer = Math.floor(Math.random() * 4) + 1;
    answerOptions.splice(editedQuestion.answer - 1, 0, container.correct_answer);
    answerOptions.forEach((choice, index) => {
      editedQuestion['choice' + (index + 1)] = choice;
  });
  console.log(editedQuestion)
    return <QuestionsContainer question={editedQuestion} />
  } ) 

  return (
    <div className="App">
      {!startGame && <Homepage startGameBtn={startGameBtn}/>}
      <div>
          {startGame && questionDiv}
          {startGame && <button className='check-answer-btn'>Check Answers</button>}
      </div>
      

    </div>
  );
}
// return editedQuestion;
export default App;
