import { styled } from "styled-components";

export const StyledIntro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 4rem;

  & section{
    margin: 5rem 0;
  }

  & p{
    line-height: 2;
  }

  & button {
    align-self: center;
  }
`