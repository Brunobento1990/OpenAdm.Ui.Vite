import styled from "styled-components";

export const Main = styled.main<{ width: string }>`
    height: 100vh;
    width: 100vm;
    display: grid;
    grid-template-columns: ${(props) => `${props.width} auto`};
`

export const ChildrenMain = styled.div``