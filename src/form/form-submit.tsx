import { Btn } from '@/components/btn'
import * as S from './styles'
import { useNavigationApp } from '@/hooks/use-navigation-app';

interface propsFormSubmit{
    onSubmit: () => void;
    urlVoltar?: string;
    title?: string;
}

export function FormSubmit(props: propsFormSubmit){
    const nav = useNavigationApp();
    return(
        <S.FormBoxSubmitStyled>
            {props.urlVoltar &&
                <Btn 
                    title='Voltar'
                    onClick={() => nav.navigate(props.urlVoltar)}
                />
            }
            <Btn 
                variant='contained'
                type='submit'
                onClick={props.onSubmit}
                title={props.title}
            />
        </S.FormBoxSubmitStyled>
    )
}