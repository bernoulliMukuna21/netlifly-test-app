import React from 'react'
import { StyledFooter } from './main.style'

const Footer = () => {
  return (
    <StyledFooter>
      &copy; copyright {new Date().getFullYear()}
    </StyledFooter>
  )
}

export default Footer