import React from 'react';
import disclaimer from './img/disclaimer.jpg';
import './App.css';

const Disclaimer = (props) => {
    if (props.disappear === true) {
        return (
            <div className='App, disclaimer'>
                <div className='disclaimer-img'>
                    <img src={disclaimer} alt="A smiley face and the words stay safe written on the ground" />
                </div>
                <div className='paragraphs'>
                    <p>This site is not to be taken as medical advice or opinion.  Information from 
                        this site comes from the CDC's STEADI program (see the links below for more 
                        information).  Please consult with your doctor if you have any questions.</p>
                    <p>After answering questions about your home, you will be presented with a list 
                        of action items to make your home safer.  Do not perform any task that would 
                        put you at risk of an injury or fall.  If you feel unsafe doing any of the
                         tasks, ask a family member or friend to perform it for you.</p>
                    <ul>
                        <li><a href='https://www.cdc.gov/steadi/patient.html'>CDC STEADI Site</a></li>
                        <li><a href='https://www.cdc.gov/steadi/pdf/STEADI-CaregiverBrochure.pdf'>CDC STEADI Caregiver Brochure</a></li>
                        <li><a href='https://www.cdc.gov/steadi/pdf/STEADI-Brochure-CheckForSafety-508.pdf'>CDC STEADI Check For Safety Brochure</a></li>
                    </ul>
                    <button onClick={props.launchQuestions}>Click here to start the screen</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

export default Disclaimer; 