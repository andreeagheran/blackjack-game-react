import styled from "styled-components";

export const PokerGameContainer = styled.div`
  width: 73%;
  height: 90vh;
  margin: 25px auto;
  border: 1px solid #fd234e;
  ${props => props.backgroundImage && `
    background: url(${props.backgroundImage}) no-repeat center center;
    background-size:contain;
  `}
`;


export const CardHolder = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  margin: 0 auto;
  background-color: transparent;
  `

export const Card = styled.div`
  height: 335px;
  width: 230px;
  ${props => props.cardImg &&
    `
    background: url(${props.cardImg}) no-repeat center center;
  `};
`;

export const GameOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20px;
  top: 200px;
  border: 1px solid #791d4545;
  box-shadow: 1px 1px 25px #791d4545;
  width: 150px;
  height: 260px;
`;

export const GameButtons = styled.button`
  display: flex;
  width: 100px;
  height: 40px;
  border: 1px solid #791d4545;
  border-radius: 1px;
  color: #f4f3f1;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 10px;
  text-transform: uppercase;
`;


export const PlayButton = styled.button`
  position: absolute;
  z-index: 9999;
  top: 40%;
  left: 46%;
  display: flex;
  width: 100px;
  height: 40px;
  border: 1px solid #791d4545;
  border-radius: 1px;
  color: #f4f3f1;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 10px;
  text-transform: uppercase;
`;

export const GameOver = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9998;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 110vh;
  background-color: rgba(255, 255, 255, 0.2);
  font-size: 82px;
  font-weight: bold;
`