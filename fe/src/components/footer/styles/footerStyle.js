import styled from "styled-components";

export const Container = styled.div`
    padding: 20px 60px;
    background: #323e1a;
    
`

export const Wrapper  = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    background: #323e1a;
    margin-left: 230px;
`

export const Column = styled.div`
    background: #323e1a;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 60px;

`

export const Row = styled.div`
    background: #323e1a;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px,1fr));
    grid-gap: 10px;
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
    }
`

export const Link = styled.a`
    background: #323e1a;
    color: #efe8d8;
    margin-bottom: 10px;
    font-size: 11px;
    text-decoration: none;
    
    &:hover {
        color: #aca69b;
        transition: 200ms ease-in;
    }
`

export const Title = styled.p`
    background: #323e1a;
    color: #efe8d8;
    font-size: 16px;
    margin-bottom: 20px;
    font-weight: bold;
    
`

