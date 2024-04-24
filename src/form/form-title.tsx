import { ReactNode } from 'react'
import { FormTitleStyled } from './styles'

interface propsFormTitle{
    children: ReactNode
}

export function FormTitle(props: propsFormTitle){
    return(
        <FormTitleStyled>
            {props.children}
        </FormTitleStyled>
    )
}