import React, { useContext } from 'react'
import { StyledResultContainer } from './style'
import { AppContext, theme } from '../../../app/App'

const Result = () => {
  const {training} = useContext(AppContext)
  const score = training.score || 0

  const classifyScore = score => {
    if (score >= 1){
      theme.scoreColor = '#4CAF50'
      return 'green'
    } else if (score < 0 ) {
      theme.scoreColor = '#f44336'
      return 'amber'
    } else {
      theme.scoreColor = '#FFBF00'
      return 'red'
    }
  }

  const scoreColor = classifyScore(score)
//{scoreColor === 'amber' ? 'orange' : scoreColor}
  return (
    <StyledResultContainer>
      <div>
        <p>score: {score}</p>
        <p>score color: {scoreColor}</p>
      </div>
    </StyledResultContainer>
  )
}

export default Result