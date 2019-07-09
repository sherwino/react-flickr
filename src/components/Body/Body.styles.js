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
    margin: 0 0 0 0.5rem;
    text-decoration: none;  
    color: #000;  
`;

const Details = styled.div`
    margin: 0 1rem 0 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    overflow: visible;
`;

const ImgLink = styled.a`
    width: 100%;
`;

const ImgTitle = styled.strong`
    flex: content;
    width: 100%;
    margin: 0 0.5rem 0 0;

`;

const ImgAuthor = styled.span`
    margin: 0 1.5rem 0 0.5rem;
`;

const ImgStats = styled.div`
    background: rgba(72,85,99,0.9);
    box-shadow: 2px 2px 1px #aaa;
`;

const Img = styled.img`
    object-fit: cover;
    height: 90vh;
    width: 100%;
`;

const Stat = styled.div`
    color: #fff;
    width: 6.5rem;
    font-size: 0.75rem;
    text-align: center;
`;

export {
    Card,
    CardLink,
    Details,
    ImgAuthor,
    ImgLink,
    ImgStats,
    ImgTitle,
    Img,
    Stat,
}