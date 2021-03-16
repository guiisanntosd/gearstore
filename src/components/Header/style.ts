import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  padding: 10px 0;

  height: 70px;
  text-align: center;

  background: transparent;
  z-index: 10;
  
  @media (max-width: 767px) {
    background: #FFF!important;
  }

  img { 
    width: 100px;
    margin-right: 10px;
  }

  .wrapper-logo {
    width: 100%;

    display: flex;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;

    p {
      color: #DF5E5E;
      font-size: 13pt;
      font-weight: 800;
    }
  }
`;