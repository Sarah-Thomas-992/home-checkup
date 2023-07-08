import React from 'react';
import welcome from './img/welcome.jpg';

const Welcome = (props) => {
    if (props.isVisible===false && props.disappear===false && props.launch===false){
        return (
            <div className="welcome">
                <img src={welcome} alt="A living room" />
                <p>Welcome!  Among the elderly, falls are a serious problem.  According to the 
                    CDC, an older adult falls every second.  Falls can have serious consequences, 
                    including traumatic brain injury, hip fractures, and death.</p>
                <p>One strategy to prevent falls is to assess the home.  A home can contain many 
                    hazards that increase fall risk.  This website is designed to take you through
                     a step-by-step screen of your (or a loved one's) home.  You will first answer 
                     a series of questions.  Afterward, you'll be presented with a list of actions 
                     you can take to increase the safety of your home.</p>
                <button onClick={props.handleClick2}>Click for a quick disclaimer</button>
        </div>
        )
    }
    else {
        return(
            <div></div>
        )
    }
} 

export default Welcome; 