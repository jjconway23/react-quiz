import React from 'react';
import Homepage from "./components/Homepage"
import Questions from "./components/QuestionsContainer"
import './App.css';
import data from "./dummyData"

function App() {
  const [startGame, setStartGame] = React.useState(false) 
  function startGameBtn(){
    console.log("clicked")
    setStartGame( prevState => !prevState)
  }
  console.log(data.results)
  const questionContainerDiv = data.results.map( container => {
    return <Questions question={container.question}/>
  } )


  return (
    <div className="App">
      {!startGame && <Homepage startGameBtn={startGameBtn}/>}
      {questionContainerDiv}

    </div>
  );
}

export default App;
