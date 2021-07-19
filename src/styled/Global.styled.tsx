import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *, *::before,*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
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
