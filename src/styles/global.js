import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
     
      
    }
//font-family: 'Cinzel', serif;
//font-family: 'Roboto', sans-serif

    :root{
        --red-color: #e61717;
        --yellow-color: #ebe134;
        --blue-color: #1766e6;
        --text-color: #000;
        --link-color:#fff;
       
    }

    a {
        text-decoration: none;
        color: var(--link-color)
    }
    
   
`;
