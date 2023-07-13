import React from 'react';
import './App.css';
import plant from './img/plant.png';

const HomeCheckup = (props) => {
    if (props.isVisible === true) {
        return (
            <div className='App, homePage'>
                <h1>Home Checkup</h1>
                <img src={plant} alt="A row of houseplants that line up to make an outline of a house between each plant" />
                <button onClick={props.handleClick}>Click here to start</button>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

export default HomeCheckup; 