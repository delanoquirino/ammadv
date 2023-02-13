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
    
    h1, h2, h3,h4{
       font-family: 'Cinzel', serif;
   }

   h1 {
    font-size: 48px;
   }

   h2 {
    font-size: 32px;
   }

   h3{
    font-size: 26px;
   }

   p {
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
   }
   
   @media (max-width: 900px)
    {
        h1 {

            font-size: 30px;

        }

           
    }
   
`;
