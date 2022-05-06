import React from "react";
export default function QuestionsContainer(props){
    return(
    <div className="questions-container">
        <h3>{props.question.question}</h3>
        <div className="answers-container">
            <button className="answer-btn">{props.question.choice1}</button>
            <button className="answer-btn">{props.question.choice2}</button>
            <button className="answer-btn">{props.question.choice3}</button>
            <button className="answer-btn">{props.question.choice4}</button>
        </div>
        <hr></hr>

    </div>
    )
}