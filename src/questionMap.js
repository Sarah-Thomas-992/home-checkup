import React from 'react';
import questionList from './questionList';

const QuestionMap = (props) => {
    const currentQuestion = questionList[props.activeIndex];

if (props.launch === true && props.showChecklist === false){
    return (
        <div>
        <img src={currentQuestion.image} alt={currentQuestion.imageSRC} />
        <p>{currentQuestion.question}</p>
        <label>
            <input type="radio" name="option" value="option1" onClick={props.handleNext} />
            {currentQuestion.answerYes}
        </label>
        <label>
            <input type="radio" name="option" value="option2" onClick={props.handleNext} />
            {currentQuestion.answerNo}
        </label>
        </div>
    )
} else{
    return (
        <div></div>
    )
}
};

export default QuestionMap; 

