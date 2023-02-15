import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    max-width: 1500px;
    margin: 0 auto;
    padding-top: 5rem;
    display: flex;
    align-items: center;
    
    @media (max-width: 1200px)
    {
        
        padding-top: 2rem;

      
    }

    @media (max-width: 740px)
    {
        
        padding-top: 5rem;

      
    }


`
export const AboutContainer = styled.div`
    
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    padding: 30px;
    
    img {
        border-radius: 0.625rem;
      }

    @media (max-width: 1080px)
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 2rem;

      
    }


    
    @media (max-width: 1200px)
    {
        display: flex;
        flex-direction: column;
     
        img {
         margin-top: 10rem;
         width: 100%;
      }
    }

    
    @media (max-width: 800px)
    {
          
        img {
         margin-top: 5rem;
         height: auto;
         width: 100%;
      }
    }

 
    
`
export const Content = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2rem;
   p {
    font-size: 30px;
   }
   span {
    font-weight: 700;
   }

   @media (max-width: 1440px)
    {
        
        p {
    font-size: 26px;
   }
    }

    @media (max-width: 1330px)
    {
        
        p {
    font-size: 24px;
   }
    }

    
`


