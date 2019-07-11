import styled from 'styled-components';

const SldrContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 2rem 0 0;
    @media (max-width: 468px) {
    flex-direction: column;
    margin: 2rem 0;
  }
    
    output {
        padding: 0 1rem;
        span {
            color: blue;
        }
    }
`;

const SldrParent = styled.div`
    background: yellow;
`;

export {
    SldrContainer,
    SldrParent
}