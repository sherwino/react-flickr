import styled from 'styled-components';

const Card = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  `;

const CardLink = styled.a`
    margin: 0 0 0 0.5rem;
    text-decoration: none;  
    color: #000;  
`;

const Details = styled.div`
    padding: 0 2rem 0 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 468px) {
        padding: 0;
  }
`;

const ImgAuthor = styled.span`
    color: rgb(72,85,99);
`;

const ImgLink = styled.a`
    width: 100%;
`;

const ImgTitle = styled.strong`
    text-align: right;
    font-size: 2rem;
`;

const ImgStats = styled.div`
    display: none;
    background: rgba(72,85,99,0.9);
    box-shadow: 2px 2px 1px #aaa;
    opacity: 0.2;
    &:hover {
        opacity: 1;
    }
`;

const Img = styled.img`
    object-fit: cover;
    height: 90vh;
    width: 100%;
`;

const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
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
    LinkContainer,
    Stat,
}