import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
   outline: unset;
  font-family: 'Inter', sans-serif;
}

:root {
    --default-border-radius: 15px;
    --default-border-color: rgba(43, 93, 168, 0.1);
}
`;
