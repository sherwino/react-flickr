import styled from 'styled-components';


const Card = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: black;
    text-align: center;
    overflow: hidden;
  `;

const Img = styled.img`
    object-fit: cover;
    height: 100vh;
    width: 100%;
`;

export {
    Card,
    Img,
}