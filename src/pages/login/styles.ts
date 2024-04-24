import styled from "styled-components";

export const MainLoginStyled = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
`

export const IconeOpenAdm = styled.img<{src: string, alt: string}>`
    src: ${(props) => props.src};
    alt: ${(props) => props.alt};
    width: 60px;
    border-radius: 10px;
`
