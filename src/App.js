import React from 'react';
import Homepage from "./components/Homepage"
import './App.css';


function App() {
  const [startGame, setStartGame] = React.useState(false) 
  function startGameBtn(){
    console.log("clicked")
    setStartGame( prevState => !prevState)
  }

  return (
    <div className="App">
      {!startGame && <Homepage
      startGameBtn={startGameBtn}
      />}
    </div>
  );
}

export default App;
