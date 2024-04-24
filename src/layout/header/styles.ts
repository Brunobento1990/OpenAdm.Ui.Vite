import styled from "styled-components";

export const Header = styled.header`
    height: 50px;
    width: calc(98% - 5px);
    display: flex;
    align-items: center;
    justify-content: end;
    position: relative;
`

export const Avatar = styled.div`
    height: 32px;
    width: 32px;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.colors.cinza_claro};
`

export const MenuUser = styled.div<{display: string}>`
    transition: all 10s;
    height:100px;
    min-height: 100px;
    width: 200px;
    position: fixed;
    margin-top: 150px;
    z-index: 2;
    border-radius: 5px;
    display: ${(props) => props.display};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    align-items: start;
    padding: 5px;
    gap: 2px;
    justify-content: center;
    flex-direction: column;
`