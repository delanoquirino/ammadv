import styled from "styled-components";

export const Services = styled.div`
    background-color:#202020;
`


export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
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

    @media (max-width: 900px)
    {
        display: flex;
        flex-direction: column;

     
      
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 200px;
    color: white;

    &:hover {
        background-color: #424242;
    }

    svg {
        width: 50px;
        height: 50px;
    }
    

`

