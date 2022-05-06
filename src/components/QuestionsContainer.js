import React from "react";

export default function QuestionsContainer(props){
    return(
    <div className="questions-container">
        <h3>{props.question}</h3>
        <div className="answers-container">
            <button className="answer-btn">Answer one</button>
            <button className="answer-btn">Answer Two</button>
            <button className="answer-btn">Answer Three</button>
            <button className="answer-btn">Answer Four</button>
        </div>
        <hr></hr>

    </div>
    )
}