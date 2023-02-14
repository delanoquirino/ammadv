import styled from "styled-components";

export const Services = styled.div`
    background-color:#202020;
`


export const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 4rem;

    
`
export const Title = styled.div`
  text-align: center;
  color: white;
  margin-top: 4rem;
`
export const Content = styled.div`
    display: flex;
    margin-top: 2rem;
    gap: 1rem;
    justify-content: center;

    @media (max-width: 900px)
    {
        display: flex;
        flex-direction: column;
        align-items: center;

     
      
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    height: auto;
    width:100%;
    padding: 1.5rem 2rem;
    color: white;
    text-align: center;
    
    &:hover {
        background-color: #424242;
    }

    svg {
        width: 50px;
        height: 50px;
    }
    

`


