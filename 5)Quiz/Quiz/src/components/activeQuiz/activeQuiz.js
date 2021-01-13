import React from 'react';
import './activeQuiz.css';
import AnswerList from './answerList/answerList';

const ActiveQuiz = props => (
    <div className="quiz__active">
        <p className="question">
            <span>
                <strong>{props.answerNumber}. </strong>
                {props.question}
            </span>

            <small>{props.answerNumber} из {props.quizLength}</small>
        </p>
        <AnswerList 
            onAnswerClick={props.onAnswerClick} 
            answers={props.answers}
            state={props.state}
        />
    </div>
);
export default ActiveQuiz;