import styled from "styled-components";

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  
    
`
export const AboutContainer = styled.div`
    display: flex;
    margin: 4rem 0;
    gap: 2rem;
    align-items: flex-start;


    @media (max-width: 1080px)
    {
        img {
            width: 400px;

        }
        
    }
    
    
    @media (max-width: 900px)
    {
        display: flex;
        flex-direction: column;

        img {
            width: 100%;

        }
      
    }

 
    
`
export const Content = styled.div`
   display: flex;
   flex-direction: column;
   
   
   gap: 1rem;
 

   h2 {
    font-size: 34px;
       font-family: 'Cinzel', serif;
   }
    
   p {
    font-size: 14px;
    font-family: 'Roboto', serif;
   }

   span {
    font-weight: 700;
   }



    
`


