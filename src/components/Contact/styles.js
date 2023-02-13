import styled from "styled-components";

export const Container = styled.div`
    background-color: #202020;
    padding-bottom: 3rem;
`


export const ContactContainer = styled.div`
    display: flex;
    max-width: 1500px;
    margin: 0 auto;
    padding: 1rem;
    padding-top: 5rem;

    @media (max-width: 900px)
    {
      flex-direction: column;
      gap: 5rem;
    }

  
 
 
`
export const Content = styled.div`
width: 100%;
color: var(--link-color);

    h1 {
        margin-top: 1rem;
        margin-bottom: 3rem;
        
    }

    @media (max-width: 900px)
    {
       
       text-align: center;
    }

 
`
export const Form = styled.form`
 display: flex;
 flex-direction: column;
 width: 100%;

    h1 {
        color: var(--link-color);
        margin-bottom: 1rem;
    }

 input,textarea {
    padding: 1rem;
    text-decoration: none;
    margin-bottom: .8rem;
    background-color: #F3F3F3;

    font-size: 16px;
    
 }

 button {
    height: 30px;
    width: 100px;

    font-size: 16px;
 }

`

export const Icons = styled.div`
  width: auto;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  
  svg {
    color: white;
    background-color: grey;
    height: 30px;
    width: 30px;
    padding: 0.2rem;
    transition: 0.3s;
    cursor: pointer;
  }

  svg:hover {
    background-color: #591508;
  }


 
`

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    
    p {
        font-size: 20px;
    }
    
    @media (max-width: 900px)
    {
        flex-direction: column;
        margin: 0.8rem;
    }


`