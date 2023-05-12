import React, { useContext, useState } from 'react'
import { StyledQuestionsContainer } from '../style'
import { dailyActionsTree } from '../../../../questions/DailyActionsQuestions'
import { useNavigate} from "react-router-dom";
import { AppContext } from '../../../../app/App';

const DailyActions = () => {
  const {training, setTraining} = useContext(AppContext)
  var navigate = useNavigate()
  var [questionToShow, setQuestionShow] = useState(0)

  const computeScore = buttonClicked => {
    if(buttonClicked==='Yes'){
      training.score = training.score + 1
    } else if(buttonClicked==='No'){
      training.score = training.score - 0.5
      /* if(noCounts === 1){
        training.score = training.score - 1
        noCounts = 0
      } else {
        training.score = training.score - 0.25
        noCounts++
      } */
    } else {
      training.score = training.score + 0.25
    }
  }

  const navigateToNextScreen = () => {
    training.dailyAction = 'complete'
    setTraining(training)
    navigate('/training/completed')
  }

  const nextQuestion = event => {
    event.preventDefault();
    var nextQuestion;
    var buttonClickedValue = event.target.value

    var currentQuestion = questionToShow

    computeScore(buttonClickedValue)
    
    if(currentQuestion===0){
      if(buttonClickedValue === 'Yes' || buttonClickedValue === 'Sometimes'){
        nextQuestion = 1
      } else {
        nextQuestion = 2
      }
      setQuestionShow(nextQuestion)
    } else if (currentQuestion===2 && buttonClickedValue !== 'No'){
      nextQuestion = 3
      setQuestionShow(nextQuestion)
    } else {
      navigateToNextScreen()
    }

  }

  return (
    <StyledQuestionsContainer>
      {dailyActionsTree.map((questionOption, index) => {
        var nameOfClass = index === questionToShow ? 'show' : 'hide'
        return (
          <div className={nameOfClass} key={index}>
            <p>
              {questionOption.question}
            </p>
            <section>
              <button className='yes-button' value='Yes' onClick={nextQuestion}>Yes</button>
              {questionOption.answer.sometimes !== 'disabled' && <button className='maybe-button' value='Sometimes' onClick={nextQuestion}>Sometimes</button>}
              <button className='no-button'value='No' onClick={nextQuestion}>No</button>
            </section>
          </div>
        )
      })}
    </StyledQuestionsContainer>
  )
}

export default DailyActions
