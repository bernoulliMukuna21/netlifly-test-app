import { Link } from "react-router-dom"
import { StyledCompleted } from "./main.style"
import React from "react"
import CheckMarkAnimation from '../assets/animations/127266-checkmark.json'
import Lottie from "react-lottie-player"

const Completed = () => {
  return (
    <StyledCompleted>
      <Lottie animationData={CheckMarkAnimation} play className='check-mark-animation'/>
      <Link to='/training'>
        <button>
          Back to Training
        </button>
      </Link>
    </StyledCompleted>
  )
}

export default Completed