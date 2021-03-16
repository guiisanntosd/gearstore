import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: inherit;
    text-decoration: none;
  }

  a:focus {
    color: inherit;
  }

  ul, li {
    list-style: none;
    margin: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-position: center;
  }

  @keyframes jumping {
    0% {transform: translateY(-10px)}
    25% {transform: translateY(0px)}
    50% {transform: translateY(-10px)}
    75% {transform: translateY(0px)}
    100% {transform: translateY(-10px)}
  }
`;