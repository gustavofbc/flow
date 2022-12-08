import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --background: #F2F3F5;
        --black: #1B2223;
        --gray: #666666;
        --green: #11EB9C;
        --green-light: #0EF6CC;
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

    h1, h2, h3, h4 {
        font-family: 'Jura', sans-serif;
    }

    .columns {
        padding: 2rem;
        display: flex;
    }
`

