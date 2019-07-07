import styled from 'styled-components';

const Card = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    color: black;
    overflow: hidden;
  `;

const CardLink = styled.a`
    width: 100%;
    text-decoration: none;  
    color: #000;  
`;

const Details = styled.div`
    display: flex;
    flex-direction: row;
    // box-sizing: border-box;

    // align-self: flex-end;
    // color: black;
`;

const ImgTitle = styled.strong`
    // flex: auto;
    width: 100%;
`;
const ImgAuthor = styled.div`
    margin: 0 0 0 0.5rem;
    flex: initial;
    width: 150px;
`;
    const ImgStats = styled.div`
    // display: flex;

`;

const Img = styled.img`
    object-fit: cover;
    height: 90vh;
    width: 100%;
`;

const Stat = styled.div`
width: 6.5rem;
font-size: 0.75rem;
text-align: right;
flex: none;
// align-self: start;
// flex-direction: row;

`;

export {
    Card,
    CardLink,
    Details,
    ImgTitle,
    ImgAuthor,
    ImgStats,
    Img,
    Stat,
}