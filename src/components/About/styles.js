import styled from "styled-components";

export const Container = styled.div`
    min-height: calc(100vh - 120px);
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
    gap: 3rem;
    align-items: flex-start;
    padding: 0.125rem 0.9375rem;
  
       
    img {
     
        border-radius: 0.625rem;
      }
   
      @media (max-width: 1080px)
    {
        flex-direction: column;
        margin-bottom: 3rem;

        img {
        margin: 0 auto;
        height: auto;
           
      }
    }

    @media (max-width: 800px)
    {
        img {
        margin: 0;
        width: 100%;
        height: auto;
           
      }
    }

`

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2rem;
   

   span {
    font-weight: 700;
   }

   @media (max-width: 1300px)
    {
      gap: 1rem;
    }




    
`


