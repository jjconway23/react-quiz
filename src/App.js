import React from 'react';
import Homepage from "./components/Homepage"
import QuestionsContainer from "./components/QuestionsContainer"
import './App.css';
// import data from "./dummyData"

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
    return <QuestionsContainer question={container.question}/>
  } ) 
console.log(questionsData)
 
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

export default App;
