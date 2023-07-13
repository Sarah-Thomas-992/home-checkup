import React from 'react';
import './App.css';
import checklist from './img/Checklist.jpg';

const Checklist = (props) => {
    const endArray = props.checklistArray;

    const handleRefresh = () => {
        window.location.reload();
    };

    if (props.showChecklist === false) {
        return (
            <div></div>
        )
    } else if (endArray.length === 0) {
        return (
            <div className='App, checklist'>
                <div className='checklist-img'>
                    <img src={checklist} alt="A checklist" />
                </div>
                <div className='paragraphs'>
                    <h1>Your home has no obvious hazards, and no action is needed.  Congratulations!</h1>
                    <button onClick={() => {
                        handleRefresh();
                        scrollToTop();
                    }}>
                        Click here to return to start</button>
                </div>
            </div>
        )
    } else if (endArray.length === 1) {
        return (
            <div className='App, checklist'>
                <div className='checklist-img'>
                    <img src={checklist} alt="A checklist" />
                </div>
                <div className='paragraphs'>
                    <h1>Here is an action you can take to improve the safety of your home!  Good luck!</h1>
                    <ul>
                        {endArray.map((item, index) => (
                            <li key={index}>{item}</li>
                        )
                        )}
                    </ul>
                    <button onClick={() => {
                        handleRefresh();
                        scrollToTop();
                    }}>Click here to return to start</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='App, checklist'>
                <div className='checklist-img'>
                    <img src={checklist} alt="A checklist" />
                </div>
                <div className='paragraphs'>
                    <h1>Here are the actions you can take to improve the safety of your home!  Good luck!</h1>
                    <ul>
                        {endArray.map((item, index) => (
                            <li key={index}>{item}</li>
                        )
                        )}
                    </ul>
                    <button onClick={() => {
                        handleRefresh();
                        scrollToTop();
                    }}>Click here to return to start</button>
                </div>
            </div>
        )
    }
}

export default Checklist;