import styled from "styled-components";

export const Header = styled.div`
  
  display: block;
  background: url(/images/Fundotopo.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 400px;
  box-shadow: 0 0 20px 3px;
 
  
    

`

export const HeaderContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    height: 400px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
    
`
export const Navi = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;

`
export const Logo = styled.div`
    
`

export const  NavBar  = styled.div`
   
    svg {
        color: white;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

`



export const MidiaSocial = styled.div`
font-size: 20px;
font-family: 'Cinzel', serif;
color: var(--link-color);


`

export const Icons = styled.div`
  width: 100px;
  display: flex;
  gap: 1rem;
  svg {
    color: grey;
    transition: 0.3s;
    cursor: pointer;
  }

  svg:hover {
    color: #FFF;
  }

 
`