import React from 'react';
import { QuestionMap } from './questionMap';

const Checklist = (props) => {
    if (props.showChecklist===true){
        return(
            <div>
                <h1>Here are the actions you can take to improve the safety of your home!  Good luck!</h1>
            </div>
        )
    } else {
        return(
            <div></div>
        )
    }
}

export default Checklist;