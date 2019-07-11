import styled from 'styled-components';


const NavBar = styled.header`
  width: 100%;
  height: 5vh;
  display: flex;
  flex-direction: row;
  background: rgba(72,85,99,0.1);
  box-sizing: border-box;
  align-items: center;
  color: black;
  position: fixed;
  @media (max-width: 468px) {
    height: 6vh;
    flex: content;
  }
`;

const Logo = styled.img`
    height: 3vh;
    opacity: 0.2;
    &:hover {
        opacity: 1;
    }
`;

const Title = styled.div`
    width: 100%;
    font-size: 2.5rem;
    font-weight: Bold;
`;

export {
    NavBar,
    Logo,
    Title
}