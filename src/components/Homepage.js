import React from "react";

export default function Homepage(props){
   
   return (
   <div className="homepage-container" >
       <h1 className="quiz-title">Quizzical</h1>
       <button className="start-quiz-button" onClick={props.startGameBtn}>Start Game</button>
   </div>
   )
}
