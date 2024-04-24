import { H1 } from '@/components/Text/h1';
import * as S from './styles'
import { Text } from '@/components/Text';
import { YupAdapter } from '@/adapter/YupAdapter';
import { useFormikAdapter } from '@/adapter/FormikAdapter';
import { Input } from '@/components/input';
import { Btn } from '@/components/btn';
import { Box } from '@/components/box';
import { useTheme } from 'styled-components';
import { useApiLogin } from './use-api-login';
import { CheckBox } from '@/components/check-box';
import { useState } from 'react';
import { config } from '@/config';

const validationsSchema = new YupAdapter().email().string("senha").build();

export function Login() {
    const theme = useTheme();
    const { login } = useApiLogin();
    const form = useFormikAdapter({
        initialValues: {
            email: "",
            senha: ""
        },
        validationsSchema,
        onSubmit: login
    })

    const [lembreMe, setLembreme] = useState<boolean>(false);
    const src = import.meta.env.VITE_LOGO;
    const alt = 'Ícone Open Adm';
    return (
        <Box
            height='100vh'
            width='100vw'
        >
            <Box
                width='600px'
                height='70%'
                backGroundColor={theme.backGroundColor.cinza}
                borderRadius='5px'
                boxShadow='0px 4px 18px 0px rgba(47, 43, 61, 0.1)'
                justifycontent='space-around'
            >
                <Box height='190px' gap='10px'>
                    <S.IconeOpenAdm src={src} alt={alt} />
                    <H1 fontSize='30px'>Open Adm E-commerce</H1>
                    <H1 fontSize='25px' fontWeight={600}>Bem vindo a Open Adm E-commerce! 👋🏻</H1>
                    <Text>
                        Por favor, efetue o login com suas credenciais de acesso !
                    </Text>
                </Box>
                <form style={{ width: '100%' }}>
                    <Box height='200px'>
                        <Input
                            value={form.value("email")}
                            id="email"
                            label="E-mail"
                            onChange={form.onChange}
                            error={form.error("email")}
                            onBlur={form.onBlur}
                            hyperText={form.helperText("email")}
                            required
                            type="email"
                            startIcon="carbon:email"
                            width='90%'
                        />
                        <Input
                            width='90%'
                            value={form.value("senha")}
                            id="senha"
                            label="Senha"
                            onChange={form.onChange}
                            error={form.error("senha")}
                            onBlur={form.onBlur}
                            hyperText={form.helperText("senha")}
                            required
                            type="password"
                            startIcon="mdi:password-outline"
                        />
                    </Box>
                    <Box height='60px'>
                        <CheckBox
                            label='Lembre-me'
                            value={lembreMe}
                            onChange={() => {
                                setLembreme(!lembreMe)
                            }}
                        />
                    </Box>
                    <Box height='200px'>
                        <Btn
                            variant='contained'
                            width='90%'
                            heigth='40px'
                            title='Login'
                            type='submit'
                            onClick={form.onSubmit}
                        />
                    </Box>
                </form>
            </Box>
        </Box>
    )
}