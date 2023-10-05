import styled from "styled-components";
//DELETE COMMENT BEFORE PUSH
{/* <div onClick>

</div>

<HomeBanner backgroundImage="">

</HomeBanner> */}

export const HomeBanner = styled.div`
  height: 30vw;
  ${(props) => props.backgroundImage && `
      background: url(${props.backgroundImage}) no-repeat;
      background-size:contain;
  `}
  position: relative;
`;

export const HomeContainer = styled.div`
  width: 70%;
  height: 20vw;
  background-color: transparent; 
  margin: 15px auto;
  padding: 15px 35px;
  position: relative;
`;

// HomeTitle
export const HomeTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
line-height: 3.8rem;
font-size: 2rem;
font-weight: bold;
letter-spacing: 1.2rem;
color: #fd234e;`

// HomeParagraph
export const HomeParagraph = styled.div`
display: flex;
justify-content: center;
align-items: center;
line-height: 1.8rem;
letter-spacing: 1px;
color: #f4f3f1;
`

// PlayButton
export const PlayButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  color: #f4f3f1;
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 1.2px;
  padding-bottom: 15px;
  &:hover {
    color: #fd234e;
  }
`