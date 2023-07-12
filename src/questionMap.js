import React from 'react';
import questionList from './questionList';
import './App.css';

export const QuestionMap = (props) => {
    const currentQuestion = questionList[props.activeIndex];
    const placeholder = currentQuestion.actionItem;

    if (props.launch === true && props.showChecklist === false) {
        return (
            <div className='App, questionMap'>
                <div className='map-img'>
                    <img src={currentQuestion.image} alt={currentQuestion.imageSRC} />
                </div>
                <div className='paragraphs'>
                    <p>{currentQuestion.question}</p>
                    <button onClick={() => {
                        props.handleNext();
                        props.updateArray(placeholder);
                    }}>{currentQuestion.answerYes}</button>
                    <button onClick={props.handleNext}>{currentQuestion.answerNo}</button>
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
};

