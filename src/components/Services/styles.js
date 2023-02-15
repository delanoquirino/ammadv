import styled from "styled-components";

export const Services = styled.div`
    background-color:#202020;
    min-height: 100vh;
`


export const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 4rem;

    
`
export const Title = styled.div`
  text-align: center;
  color: white;
  margin: 2rem 0;
`
export const Content = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(400px,1fr));
    justify-content: center;
    justify-items: center;
    padding: 30px;
    margin-top: 5rem;

    
    @media (max-width: 1080px)
    {
        display: flex;
        flex-direction: column;
        align-items: center;

      
    }
`

export const Card = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;
    justify-items: center;
    padding: 20px;
    color: white;
    text-align: center;

    p {
        margin-top: 0.625rem;
        font-size: 1.25rem;
    }

    @media (max-width: 1080px)
    {
        display: flex;
        flex-direction: column;
              
    }
    
    &:hover {
        background-color: #424242;
    }

    svg {
        width: 80px;
        height: 80px;
    }
    

`


