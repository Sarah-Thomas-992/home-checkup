import React from 'react';

const Checklist = (props) => {
    if (props.showChecklist===true){
        return(
            <div>
                <h1>Checklist here</h1>
            </div>
        )
    } else {
        return(
            <div></div>
        )
    }
}

export default Checklist;