import styled from 'styled-components';

export const Container = styled.div`
  background-color:#591508;
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 300px;
  right: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;
  
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;

    a {
      font-size: 20px;
      padding: 1rem;
      width: 100%;
      text-align: center;
      transition: 0.2 ease-in-out;
     &:hover {
      color: #000;
      background-color: #d8d0d0;
     
     }
      
    }
`;


export const Contact = styled.div`
  margin-top: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  
`
export const Address = styled.div`
  text-align: center;
  
`