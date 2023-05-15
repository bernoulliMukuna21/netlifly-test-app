import React from 'react'
import { StyledHomepage } from './style'
import { useNavigate } from 'react-router-dom'
import animationImage from '../../../assets/images/esther-animation-image.png'

const Home = () => {
  const navigate = useNavigate()

  return (
    <StyledHomepage>
      {/* <video loop autoPlay muted >
        <source src={animationVideo} type='video/mp4'/>
      </video> */}
      <img id='animation-video' src={animationImage} alt='Animation Loop'/>
      <button 
      style={{opacity: 1}}
      onClick={() => navigate('/test')}
      >
        Go to Test
      </button>
    </StyledHomepage>
    
  )
}

export default Home