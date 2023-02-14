import styled from "styled-components";

export const Team = styled.div`
  
  display: block;
  background-image: url(/images/banner-predios.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
 
  
 
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
 
`
export const Content = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    gap: 1rem;

    @media (max-width: 900px)
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
    @media (max-width: 900px)
    {
      width: 100%;
        
      
    }

  


    

`



