import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      
    @media(max-width: 1080px){
      html{
        font-size: 98.75%;
      }
    }
    @media(max-width: 720px){
      html{
        font-size: 77.5%;

        h1
        {

            font-size: 2rem;
        } 
      }
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
    font-size: 2.375rem;
   }

   h2 {
    font-size: 2rem;
   }

   h3{
    font-size: 1.625rem;
   }

   p {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
   }
   
  
`;
