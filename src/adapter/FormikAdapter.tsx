import { useFormik } from "formik";

export interface propsFormikAdapter {
    initialValues?: any,
    validationsSchema?: any,
    onSubmit: (values: any) => void;
}

export function useFormikAdapter(props: propsFormikAdapter) {
    const formik = useFormik({
        initialValues: props.initialValues,
        onSubmit: props.onSubmit,
        validationSchema: props.validationsSchema
    });

    return {
        onSubmit: formik.submitForm,
        value: (key: string) => formik.values[key],
        onBlur: formik.handleBlur,
        onChange: formik.handleChange,
        helperText: (key: string) => formik.touched[key] && formik.errors[key],
        error: (key: string) => !!(formik.touched[key] && formik.errors[key])
    }
}