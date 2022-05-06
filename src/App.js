import React from 'react';
import Homepage from "./components/Homepage"
import QuestionsContainer from "./components/QuestionsContainer"
import './App.css';
import data from "./dummyData"

function App() {
  const [startGame, setStartGame] = React.useState(false) 
  function startGameBtn(){
    setStartGame( prevState => !prevState)
  }
  console.log(data.results)
  const questionDiv = data.results.map( container => {
    return <QuestionsContainer question={container.question}/>
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

export default App;
