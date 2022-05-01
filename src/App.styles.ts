import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/t.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
    background-size:cover ;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background: linear-gradient(90deg, rgba(255,193,225,1) 0%, rgba(186,186,227,1) 50%, rgba(148,224,240,1) 90%);
    width: 10rem;
    text-align:center;
    margin-bottom: 2rem;
  }

  h1 {
    font-family: Fascinate;
background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(232,45,253,1) 100%);    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(90deg, rgba(255,193,225,1) 0%, rgba(186,186,227,1) 50%, rgba(148,224,240,1) 90%);
    border: 2px solid #fff;
    box-shadow: 0px 5px 10px rgb(0, 0, #b8cfe0);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    color: #fff;
  }

  .start {
    max-width: 200px;
    
  }
`;
