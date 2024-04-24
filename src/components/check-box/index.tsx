import { Text } from '../Text';
import { Box } from '../box';
import * as S from './styles'

interface propsCheckBox {
    label?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onBlur?: React.ChangeEventHandler<HTMLInputElement>;
    error?: boolean;
    hyperText?: any;
    value?:boolean
}

export function CheckBox(props: propsCheckBox) {
    return (
        <Box
            flexdirection='row'
            gap='12px'
        >
            <S.CheckBoxStyled
                type='checkbox'
                onChange={props.onChange}
                onBlur={props.onBlur}
                checked={props.value}
            />
            {props.label &&
                <Text>
                    {props.label}
                </Text>
            }
        </Box>
    )
}