import { ReactNode } from 'react';
import * as S from './styles';

interface propsFormRow {
    rows: number;
    children: ReactNode;
    gridgap?: string;
}

export function FormRow(props: propsFormRow) {
    const columns = `repeat(${props.rows}, 1fr)`;

    return(
        <S.FormRowStyled
            columns={columns}
            gridgap={props.gridgap ?? '10px'}
        >
            {props.children}
        </S.FormRowStyled>
    )
}