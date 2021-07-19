import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *, *::before,*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
html{
    font-size: 66.5%;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;

    /* font-weight: 600; */
    @media (min-width: 678px){
      font-size: 100%;
    }
}

  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    box-sizing: border-box;
  }
  a, a:visited, a:active {
    color: inherit;
    text-decoration: none;
    border: none;
    outline: none;
  }
  .block {
    display: block;
  }
  .flex{
    display: flex;
  }
  .just-center{
    justify-content: center;
  }
  .just-between{
    justify-content: space-between;
  }
  .alig-center{
    align-items: center;
  }
`
