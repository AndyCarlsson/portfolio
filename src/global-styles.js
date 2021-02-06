import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  font-family: 'Montserrat', sans-serif;
  color: #141414;
  background-color: #EAE7DC;
  font-size: 16px;
  min-height: 100vh;
  width: 100%;
}

p{
  line-height: 1.4;
}


::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}

`;
