import { createGlobalStyle } from "styled-components";
import { device } from "./breakpoints";

export const GlobalStyles = createGlobalStyle`
    * 
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    body 
    {
        background: ${({ theme }) => theme.bgBody};
        color: ${({ theme }) => theme.textColor};
        font-family: 'Space Mono', monospace;
        transition: all 0.50s linear;
        padding: 31px 24px 80px;
        display:grid;
        place-items: center;
        height:100vh;

    }

    #root 
    {
        width: min(100%, 573px);
        margin: 0 auto;
        
        @media ${device.tablet} {
            width: min(100%, 730px);
        }

        @media (max-height:650px) {
            margin-bottom: 30px;
            
        }
    }

    a:hover
    {
        text-decoration: underline
    }
`;
