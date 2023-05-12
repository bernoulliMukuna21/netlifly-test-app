import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StyledTrainingContainer } from "./style"
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "../../../app/App"

const Training = () => {
  const {training} = useContext(AppContext)
  var navigate = useNavigate()

  const isDailyActionsTrainingComplete = training.dailyAction === 'complete'
  const isReserachTrainingComplete = training.researchDesignPlanning === 'complete'
  const isTrainingCompleted = isDailyActionsTrainingComplete && isReserachTrainingComplete

  return (
    <StyledTrainingContainer>
      <h1>
        Fitness for duties
      </h1>
      <div className="training-options">
        <ul>
          <li>
            <section>
              <span>1. </span>
              <Link to='questions/daily_actions'>Daily Actions</Link>
            </section>
            <FontAwesomeIcon icon={faClipboardCheck} className='faCheckMark' 
              style={{
                opacity: !isDailyActionsTrainingComplete ? 0.5: 1,
                color: !isDailyActionsTrainingComplete ? "black": '#4CAF50'
              }}
            />
          </li>
          <li>
          <section>
              <span>2. </span>
              <Link to='questions/research_design_planning'>Research Design Planning</Link>
            </section>
            <FontAwesomeIcon icon={faClipboardCheck} className='faCheckMark'
              style={{
                opacity: !isReserachTrainingComplete ? 0.5: 1,
                color: !isReserachTrainingComplete ? "black": '#4CAF50'
              }}
            />
          </li>
        </ul>
        <button 
          disabled={!isTrainingCompleted ? true: false}
          onClick={() => navigate('/result')}
          style={{
            opacity: !isTrainingCompleted ? 0.5: 1,
          }}
        >Check Score</button>
      </div>
    </StyledTrainingContainer>
  )
}

export default Training