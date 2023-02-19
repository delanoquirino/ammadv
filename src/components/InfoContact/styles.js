import styled from "styled-components";

export const Icons = styled.div`
  width: auto;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  
`

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    
    svg {
    color: white;
    background-color: grey;
    height: auto;
    width: 30px;
    padding: 0.25rem 0.125rem;
    transition: 0.3s;
    border-radius: 30%;
     
  }

  svg:hover {
    background-color: #591508;
   
           
  }

  @media (max-width: 700px)
    {

        flex-direction: column;
        margin-bottom: 1rem;

      
    }
  



`