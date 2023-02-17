import styled from "styled-components";

export const Team = styled.div`
  
  background-image: url(/images/banner-predios.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
`


export const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 1rem;
   

`
export const Title = styled.div`
  text-align: center;
  color: var(--text-color);
  margin-top: 4rem;

  
  @media (max-width: 1080px)
    {
      h1 {
        background-color: #FFFFFF;
        display: inline;
        padding: 0 1rem;
        border-radius: 0.625rem;

      }
      
    }
 
`
export const Content = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    gap: 1rem;

    @media (max-width: 1080px)
    {
        display: flex;
        flex-direction: column;
      
    }
`

export const Card = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 500px;
    width: 400px;
    color: var(--text-color);

    img {
      border-radius: 50%;
      
    }


    @media (max-width: 1080px)
    {
      width: 100%;
        
      
    }

  


    

`



