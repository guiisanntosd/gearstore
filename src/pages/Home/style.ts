import styled from 'styled-components';
import circle from '../../assets/images/png/circle.png'
import circleTwo from '../../assets/images/png/circle-2.png'

export const Content = styled.div`
  position: relative;

  height: 100vh;
  
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 767px) {
    display: unset;
  }

  .wrapper-product {
    position: relative;
    overflow: hidden;
    z-index: 0;
    
    @media (max-width: 767px) {
      display: none;
    }

    video {
      object-fit: cover;
      clip-path: url(#svgPath);
      width: 100%;
      height: 100vh;

      transform: translateX(60px)
    }

    :before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      z-index: 1;
    }
  }

  .wrapper-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 767px) {
      margin-top: 30px;
    }
  
    .wrapper-info-content {
      display: flex;
      flex-flow: wrap;
      flex-direction: column;
      p {
        font-size: 20pt;
        text-align: left;
        font-weight: 500;
        color: #55575b;
        margin-bottom: 10px;
        font-family: sans-serif;
      }

      span {
        font-size: 11pt;
        color: #55575b;
        margin-bottom: 20px;
      }
    }

    img {
      height: 340px;
      object-fit: contain;
      margin-bottom: 30px;
    }    
  }

  .wrapper-scroll-down {
    cursor: pointer;

    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #FFF;
  background: #FFF;
  color: #CF3E3A;

  box-shadow: 0 0 30px rgb(0 0 0 / 10%);
  font-size: 13pt;
  font-weight: 500;
  transition: all .5s ease-in-out;
  font-weight: 600;

  :hover {
    background: #FFF;
    color: #CF3E3A;
    border-color: #CF3E3A;
  }
`;

export const InfoProduct = styled.div`
  min-height: 100vh;

  display: flex;
  flex-flow: wrap;
  flex-direction: row;
  justify-content: space-evenly;

  background: url(${circle}) no-repeat;
  background-size: contain;
  background-position: -30% 50%;

  .product-about {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55%;

    @media (max-width: 767px) {
      margin-top: 50px;
      width: 100%;
    }

    .card {
      background: #FFF;
      width: 80%;
      padding: 40px 30px;
      box-shadow: 0 0 30px rgb(0 0 0 / 10%);
      color: #000;
      
      h1 {
        font-size: 16pt;
      }
      
      p {
        color: #B2B2B2;
        font-size: 12pt;
        margin-bottom: 25px;        
      }

      ul li {
        margin: 10px 0;
        font-size: 14pt;
        position: relative;
      }
    }
  }

  .product-img {
    width: 35%;

    @media (max-width: 767px) {
      display: none;
    }

    img {
      width: 100%;
      object-fit: contain;
      animation: jumping 2s ease-in-out infinite;
    }
  }
`;

export const FeaturesProduct = styled.div`
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
  justify-content: space-evenly;

  .card-feature {
    width: 26%;
    min-height: 250px;
    text-align: center;
    background: #FFF;
    box-shadow: 0 0 30px rgb(0 0 0 / 10%);
    margin-bottom: 40px;
    padding: 30px 20px;

    @media (max-width: 767px) {
      width: 45%;
    }

    @media (max-width: 575px) {
      width: 80%;
    }

    h4 {
      font-size: 16pt;
      margin: 15px 0;
      color: #727272;
    }

    p {
      font-size: 12pt;
      color: #777;
    }
  }
`;

export const VideoProduct = styled.div`
  width: 100%;
  overflow: hidden;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;

  button {
    margin: 30px 0;
  }

  img {
    object-fit: cover;
    clip-path: url(#svgPathSound);
    width: 100%;
    height: 100vh;
    transform: translateX(60px);

    @media (max-width: 767px) {
      transform: unset;
    }
  }
`;

export const Products = styled.div`
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  background: url(${circleTwo}) no-repeat;
  background-position: 130% 100%;
  background-size: contain;

  .card-product {
    background: #FFF;
    width: 27%;
    box-shadow: 0 0 30px rgb(0 0 0 / 10%);
    margin: 20px 0;
    padding: 30px;
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
      width: 45%;
    }

    @media (max-width: 575px) {
      width: 80%;
    }

    p {
      font-size: 14pt;
      font-weight: 600;
      color: #CF3E3A;
    }

    p span {
      font-size: 16pt;
      font-weight: 800;
    }

    h4 {
      font-size: 15pt;
      color: #777;
      text-align: center;
    }

    img {
      height: 240px;
      object-fit: contain;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 15px 0;
      border-radius: 5px;
      padding: 15px 40px;
      border: none;
      background: #FFF;
      font-size: 12pt;
      box-shadow: 0 0 30px rgb(0 0 0 / 10%);
      color: #CF3E3A;
      font-weight: 600;
      cursor: pointer;
    }
  }

`;