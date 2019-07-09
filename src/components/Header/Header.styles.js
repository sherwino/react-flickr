import styled from 'styled-components';


const NavBar = styled.header`
  width: 100%;
  height: 5vh;
  display: flex;
  background: rgba(72,85,99,0.1);
  box-sizing: border-box;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  color: black;
  text-align: center;
  position: fixed;
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