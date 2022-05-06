import React from "react";

export default function QuestionsContainer(props){
    return(<div className="questions-holder">
        <h3>{props.question}</h3>
        <div className="answers-container">
            <button>Answer one</button>
            <button>Answer Two</button>
            <button>Answer Three</button>
            <button>Answer Four</button>
        </div>

    </div>
    )
}