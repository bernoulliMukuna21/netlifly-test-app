import React from 'react'
import { StyledHomepage } from './style'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <StyledHomepage>
      <button 
      style={{opacity: 1}}
      onClick={() => navigate('/training')}
      >
        Go to Training
      </button>
    </StyledHomepage>
    
  )
}

export default Home