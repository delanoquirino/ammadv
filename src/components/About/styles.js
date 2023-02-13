import styled from "styled-components";

export const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 1rem;
  
    
`
export const AboutContainer = styled.div`
    display: flex;
    margin: 4rem 0;
    gap: 2rem;
    align-items: flex-start;
   
    
    img {
         
       height: auto;
       width: 600px;
    }

    @media (max-width: 1200px)
    {
        display: flex;
        flex-direction: column;
        align-items: center;
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

   span {
    font-weight: 700;
   }



    
`


