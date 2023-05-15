import { styled } from "styled-components";

export const StyledHomepage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #animation-video{
    width: 50rem;
    margin-bottom: 5rem;
  }
`

export const StyledAboutPage = styled.div`
  width: 100%;
  margin: 3rem 5rem 3rem 5rem;

  & h1{
    margin-bottom: 2rem;
  }

  & p{
    line-height: 2;
  }
`