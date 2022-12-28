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
        --red: #E83F5B;
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
        overflow-x: scroll;

        &::-webkit-scrollbar {
            width: 10px;
        }

        &::-webkit-scrollbar-track {
            border-radius: 4px;
        }
 
        &::-webkit-scrollbar-thumb {
            background: linear-gradient(90deg, #4D51B4 0%, #11EB9C 100%);
            border-radius: 6px;
            border: 2px solid var(--black);
        }

        @media(max-width: 500px) {
            padding: 0;
        }
    }
`

