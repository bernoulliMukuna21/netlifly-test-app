import React, { useContext, useState } from 'react'
import { StyledQuestionsContainer } from '../style'
import { dailyActionsTree } from '../../../../questions/DailyActionsQuestions'
import { useNavigate} from "react-router-dom";
import { AppContext } from '../../../../app/App';

const DailyActions = () => {
  const trainingStatus = useContext(AppContext)
  var navigate = useNavigate();
  var [questionToShow, setQuestionShow] = useState(0)

  const nextQuestion = () => {
    if(questionToShow < dailyActionsTree.length - 1){
      questionToShow = questionToShow+1
      setQuestionShow(questionToShow)
    } else {
      trainingStatus.training.dailyAction = 'complete'
      trainingStatus.setTraining(trainingStatus.training)
      navigate('/training/completed')
    }
    console.log('question to show: ', questionToShow+1)
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
              <button className='yes-button' onClick={nextQuestion}>Yes</button>
              {questionOption.answer.sometimes !== 'disabled' && <button className='maybe-button' onClick={nextQuestion}>Sometimes</button>}
              <button className='no-button' onClick={nextQuestion}>No</button>
            </section>
          </div>
        )
      })}
    </StyledQuestionsContainer>
  )
}

export default DailyActions
