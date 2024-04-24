import { ReactNode } from 'react'
import * as S from './styles'
import { useTheme } from 'styled-components';

interface propsH1 {
    children: ReactNode,
    fontWeight?: number;
    fontSize?: string;
    color?: string;
}

export function H1(props: propsH1) {
    const theme = useTheme();
    const color = props.color ?? theme.colors.cinza_escuro;
    const fontSize = props.fontSize ?? '35px';
    const fontWeight = props.fontWeight ?? 700;
    return <S.H1Styled
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
    >{props.children}</S.H1Styled>
}