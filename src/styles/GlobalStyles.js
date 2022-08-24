import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: monospace, sans-serif;
        font-size: 20px;
    }
    *, button {
        border: 0;
        background: none;
    }
	*, html {
		scroll-behavior: smooth !important;
	}
    body {
        background-color: var(--primary);
        color: var(--white);
    }
    :root {
        --primary: #111111;
        --secondary: #040404;
        --white: #EEEEFF;
        --purple: #8B80F9;
        --blue: #5465FF;
    }
    h2 {
        font-size: 40px;
        font-weight: bolder;
        position: relative;
        padding-bottom: 1rem;
        margin-bottom: 2rem;

        &::before {
            position: absolute;
            content: "";
            width: 8px;
            height: 8px;
            bottom: -4px;
            left: 0;
            border: 2px solid var(--white);
            border-radius: 50%;
        }
        &::after {
            position: absolute;
            content: "";
            width: 50px;
            height: 1px;
            bottom: 0;
            left: 20px;
            border-radius: 2px;
            background-color: var(--white);
        }
    }
    p {
        font-size: 17px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    a {
        text-decoration: none;
        color: inherit;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #BDB7FF;
        border-radius: 10px;
    }
`
