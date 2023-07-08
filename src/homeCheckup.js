import { isVisible } from '@testing-library/user-event/dist/utils';
import React from 'react';

const HomeCheckup = (props) => {
    if (props.isVisible===true){
        return (
            <div className="homePage">
                <h1>Home Checkup</h1>
                <button onClick={props.handleClick}>Click here to start</button>
            </div>
        )
    }
    else {
        return(
            <div></div>
        )
    }
} 

export default HomeCheckup; 