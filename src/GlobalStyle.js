import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
    --primary-color: #1D3557;
    
    --background-color: #F1FaEE;
    --secondary-color: #f7797d;
    --greenBlue: #a8dadc;
    --lightBlue: #457b9d;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
    --fontSuperSmall: 0.8rem;
    --font-color: #151515;


}
* {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}
body {
    color: var(--font-color);
    background-color: var(---background-color);
    height: 100vh;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    border: 1px solid black
}
`;
