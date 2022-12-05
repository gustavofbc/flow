import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --background: #F2F3F5;
        --black: #1B2223;
        --green: #11EB9C;
        --text: #2E384D;
        --purple: #4D51B4;
        --white: #FDFBFD;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: var(--background);
        font-family: 'Inter', sans-serif;
    }
    
    button {
        cursor: pointer;
    }

    h1 {
        font-family: 'Jura', sans-serif;
    }
`

