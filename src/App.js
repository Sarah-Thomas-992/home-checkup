import './App.css';
import React, { useState } from 'react';
import HomeCheckup from './homeCheckup';
import Welcome from './welcome';
import Disclaimer from './disclaimer';
import { QuestionMap } from './questionMap';
import questionList from './questionList';
import Checklist from './Checklist';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [disappear, notDisappear] = useState(false);
  const [launch, makeLaunch] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showChecklist, activateChecklist] = useState(false);
  const [checklistArray, updateChecklist] = useState([]);

  const updateArray = (placeholder) => {
    const updatedArray = [...checklistArray, placeholder];
    updateChecklist(updatedArray);
  }

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleClick2 = () => {
    notDisappear(!disappear);
  };

  const launchQuestions = () => {
    makeLaunch(!launch);
    notDisappear(!disappear);
  };

  const handleNext = () => {
    if (activeIndex < questionList.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    } else {
      activateChecklist(!showChecklist);
    }
  };

  return (
    <div className='App'>
      <HomeCheckup handleClick={handleClick} isVisible={isVisible} scrollToTop={scrollToTop} />
      <Welcome isVisible={isVisible} handleClick2={handleClick2} disappear={disappear} launch={launch} scrollToTop={scrollToTop} />
      <Disclaimer disappear={disappear} launchQuestions={launchQuestions} scrollToTop={scrollToTop} />
      <QuestionMap
        activeIndex={activeIndex}
        handleNext={handleNext}
        launch={launch}
        showChecklist={showChecklist}
        updateArray={updateArray}
        scrollToTop={scrollToTop}
      />
      <Checklist showChecklist={showChecklist} checklistArray={checklistArray} scrollToTop={scrollToTop} />
    </div>
  );


}



export default App;
