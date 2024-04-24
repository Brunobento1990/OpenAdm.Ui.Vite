import * as yup from 'yup';

interface IOptionsValidations {
    message?: string;
    length?: number
}

export class YupAdapter {
    private shape: any
    private message: string = 'Este campo é obrigatório!';
    constructor() {
        this.shape = {};
    }

    string(fieldName: string, options?: IOptionsValidations) {
        this.shape[fieldName] = yup.string()
            .trim()
            .required(options?.message ?? this.message);
            
        return this;
    }

    email(message?: string) {
        this.shape["email"] = yup.string().email("E-mail inválido!").required(message ?? this.message);
        return this;
    }

    build() {
        return yup.object().shape(this.shape);
    }
}