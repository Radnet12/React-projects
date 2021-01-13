import React from 'react';
import './answerList.css';
import AnswerItem from './answerItem/answerItem';

const AnswerList = props => (
    <ul className="answer__list">
        {props.answers.map((answer, index) => {
            return (
                <AnswerItem 
                    key={index} 
                    answer={answer}
                    onAnswerClick={props.onAnswerClick}
                    state={props.state ? props.state[answer.id] : null}
                />
            )
        })}
    </ul>
);

export default AnswerList;