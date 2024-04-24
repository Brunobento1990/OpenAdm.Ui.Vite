import { useState } from 'react'
import * as S from './styles'

let show: () => void;
let close: () => void;

function Loader() {
    const [open, setOpen] = useState<boolean>(false);

    show = () => {
        setOpen(true);
    }

    close = () => {
        setOpen(false);
    }

    if (!open) return null;

    return (
        <S.LoaderBodyStyled>
            <S.LoaderStyled />
        </S.LoaderBodyStyled>
    )
}

export function useLoader() {
    return {
        show,
        close,
        component: Loader
    }
}