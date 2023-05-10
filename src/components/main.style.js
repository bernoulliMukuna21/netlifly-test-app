import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledHeader = styled.header`
  border-bottom: .2rem solid black;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;

  .left-header{
    /* flex: 8; */
    display: flex;
    flex-direction: column;
  }
  .centre-header{
    /* flex: 3; */
  }
  .right-header{
    /* flex: 1; */
    display: flex;
    flex-direction: column;
  }

  .farProfileImg{
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  img{
    /* border: .1rem dashed black; */
    width: 13rem;
    
    &:first-child{
      margin-bottom: 1rem;
    }
  }
`

export const StyledLink = styled(Link)`
  margin: 0 1rem ;
  text-decoration: none;
  color: black;
`
export const StyledFooter = styled.footer`
  border-top: .2rem solid black;
  text-align: center;
  padding-top: 2rem;
`

export const StyledPage = styled.main`
  font-size: 1.3rem;
  min-height: ${props => props.height}px;
  display: flex;

  & button{
    align-items: center;
    background-color: #405cf5;
    opacity: 0.6;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: white;
    cursor: pointer;
    display: inline-flex;
    font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    margin: 0;
    min-height: 3rem;
    padding: calc(.875rem - 1px) calc(1.5rem - 1px);
    position: relative;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: auto;
  }
`

export const StyledCompleted = styled.div`
  border: .1rem solid black;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & button{
    opacity: 1;
  }

  & .check-mark-animation{
    width: 20rem;
  }
`