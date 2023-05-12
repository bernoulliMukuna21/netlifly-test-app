import { styled } from "styled-components";

export const StyledResultContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & div{
    text-align: center;
    border: .3rem dashed ${props => props.theme.scoreColor};
    padding: 2rem;
  }

  & p{
    font-size: 2rem;
  }
`