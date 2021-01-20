import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  color: #141414;
  background-color: #EAE7DC;
  font-size: 16px;
  max-height: 100vh;
  width: 100%;
}


::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
`;
