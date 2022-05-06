import React from 'react';
import Homepage from "./components/Homepage"
import Questions from "./components/QuestionsContainer"
import './App.css';
import QuestionsContainer from './components/QuestionsContainer';


function App() {
  const [startGame, setStartGame] = React.useState(false) 
  function startGameBtn(){
    console.log("clicked")
    setStartGame( prevState => !prevState)
  }


  return (
    <div className="App">
      {!startGame && <Homepage startGameBtn={startGameBtn}/>}
      <QuestionsContainer />

    </div>
  );
}

export default App;
