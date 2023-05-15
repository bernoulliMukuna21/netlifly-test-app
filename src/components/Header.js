import React from 'react'
import UoSheffield_logo from '../assets/images/University-of-Sheffield-logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { StyledHeader, StyledLink } from './main.style'

const Header = () => {
  return (
    <StyledHeader>
      <div className='left-header'>
        <img src={UoSheffield_logo} alt='University of sheffield'/>
      </div>
      <div className='centre-header'>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/about-us'>About</StyledLink>
      </div>
      <div className='right-header'>
        <Link 
          style={{
            display: 'flex',
            flexDirection: 'column',
            color: 'black',
            textDecoration: 'none'
          }}
        >
          <FontAwesomeIcon icon={faUser} className='farProfileImg'/>
          <span>Esther Mboya</span>
        </Link>
      </div>
    </StyledHeader>
  )
}

export default Header