import { styled } from "styled-components";

export const StyledTrainingContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 25%;

  & .training-options{
    & ul{
      margin: 5rem 0;
    }

    & li {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      
      :first-child{
        margin-bottom: 1.5rem;
      }
    }

    & a{
      text-decoration: underline;
    }

    & .faCheckMark{
      font-size: 1.75rem;
    }

    & button{
      float: right;
    }
  }
`

export const StyledQuestionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & div{
    text-align: center;
  }

  & p{
    margin-bottom: 5rem;
  }

  & button{
    margin: 0 2rem;
    align-items: center;
    opacity: 1;
  }

  & .yes-button{
    background-color: #4CAF50;
  }

  & .no-button{
    background-color: #FF4742;
  }

  & .maybe-button{
    background-color: #fff000;
  }
`

