import { styled } from "styled-components";

export const StyledHomepage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledAboutPage = styled.div`
  width: 100%;
  margin: 3rem 10rem 3rem 10rem;

  & h1{
    margin-bottom: 2rem;
  }

  & p{
    line-height: 2;
  }
`