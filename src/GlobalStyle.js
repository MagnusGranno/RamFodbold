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
    background-color: #fff;
    height: 100vh;
    width: 100%;
    margin: 0 auto;


    @media (max-width: 860px) {
        ::-webkit-scrollbar {
            display: none;
        }
    }
}

.Link {
    color: #fff;
    text-decoration: none;
}

.leftBody {
    border-right: 1px solid black;
    max-width: 860px;
    width: 100%;
    
}

.rightBody {
    max-width: 560px;
    width: 100%;
}
.myBody {
    display: grid;
    grid-template-columns: 860px 1fr;
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
}
`;
