import styled from "styled-components";

export const Container = styled.div`
    height: calc(100% - 120px);
    max-width: 1500px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    align-items: center;
    
`
export const AboutContainer = styled.div`
    
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    padding: 30px;

    
    img {
         
       height: auto;
       width: 800px;
    }

    @media (max-width: 1080px)
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


