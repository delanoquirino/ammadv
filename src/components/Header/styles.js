import styled from "styled-components";

export const Header = styled.div`
  height: 120px;
  background-color: #fff;
  box-shadow: 0px 15px 45px -9px rgb(0 0 0 / 20%);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1;
 
`

export const HeaderContainer = styled.div`
    height: 100%;
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    padding-left: 1rem;
   
`
export const Navi = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
export const Logo = styled.div`
  
  @media (max-width: 1080px)
    {
      img {

        width:90%;
      }
    }
  
`

export const NavBar = styled.div`
   
    svg {
      display: none;
      
    }

   @media (max-width: 1080px)
    {
      
      svg {
        display: block;
          color: black;
          width: 40px;
          height: 40px;
          cursor: pointer;
          margin-right: 4rem;
      }
    }

`

export const Content = styled.div`
    display: flex;
  
  a {
    display: block;
    padding: 2rem;
    position: relative;

    font-size: 1.25rem;
    font-family: Cinzel, sans-serif;
    color: black;
    padding: 0.5rem;
    
    &::after {
    content: '';
    position: absolute;
    bottom: 0.1rem;
    left: 50%;
    width: 0;
    height: 0.2rem;
    background: 	#D3D3D3;
    transition: all 300ms ease-in-out;
    }
    
   &:hover::after {
      width: 80%;
      left: 10%;
      
    }
  
  }
 
    

   


 
  @media (max-width: 1080px)
    {
      display: none;
     
    }

`
