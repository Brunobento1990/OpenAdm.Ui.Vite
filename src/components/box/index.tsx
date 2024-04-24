import { ReactNode } from 'react';
import * as S from './styles'

interface propsBox {
    width?: string;
    height?: string;
    alignitems?: 'stretch' | 'center' | 'start' | 'end';
    justifycontent?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    children: ReactNode;
    flexdirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse',
    borderRadius?: string,
    backGroundColor?: string,
    boxShadow?: string,
    gap?:string
}

export function Box(props: propsBox) {
    const width = props.width ?? '100%';
    const height = props.height ?? '100%';
    const alignitems = props.alignitems ?? 'center';
    const justifycontent = props.justifycontent ?? 'center';
    const flexdirection = props.flexdirection ?? 'column';
    const backGroundColor = props.backGroundColor ?? 'transparent';

    return <S.BoxStyled
        width={width}
        height={height}
        alignitems={alignitems}
        justifycontent={justifycontent}
        flexdirection={flexdirection}
        backgroundcolor={backGroundColor}
        borderradius={props.borderRadius}
        boxshadow={props.boxShadow}
        gap={props.gap}
    >
        {props.children}
    </S.BoxStyled>
}