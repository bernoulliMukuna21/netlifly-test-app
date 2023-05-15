import { useNavigate } from "react-router-dom"
import { StyledIntro } from "./style"

const Introduction = () => {
  const navigate = useNavigate()
  return (
    <StyledIntro>
      <h1>
        Test Introduction
      </h1>
      <section>
        <p>Welcome,</p>
        <p>
          The following test has two sections. One that will test your <b><i>Daily
          Actions</i></b> and another for <b><i>Research Design Planning</i></b>.
          Your score is calculated as you work through the questions. This score is only Provided
          at the end after one has answered both sets of questions.
        </p>
      </section>
      <button 
      style={{opacity: 1}}
      onClick={() => navigate('/training')}
      >
        Take Test
      </button>
    </StyledIntro>
  )
}

export default Introduction