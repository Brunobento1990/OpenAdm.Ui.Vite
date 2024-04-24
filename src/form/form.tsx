import { ReactNode } from 'react'
import * as S from './styles'
import { Box } from '@/components/box'

interface propsForm {
    children: ReactNode
}

export function Form(props: propsForm) {
    return (
        <Box
            justifycontent='start'
        >
            <S.FormStyled>
                {props.children}
            </S.FormStyled>
        </Box>
    )
}