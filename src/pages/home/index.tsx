import { useFormikAdapter } from "@/adapter/FormikAdapter";
import { YupAdapter } from "@/adapter/YupAdapter";
import { Input } from "@/components/input";
import { FormRoot } from "@/form";

const validationsSchema = new YupAdapter().email().string("senha").build();

export function Home() {
  const form = useFormikAdapter({
    initialValues: {
      email: "",
      senha: ""
    },
    validationsSchema,
    onSubmit: (value) => { console.log(value) }
  })

  return (
    <>
      <FormRoot.Form>
        <FormRoot.FormTitle>
          Teste
        </FormRoot.FormTitle>
        <FormRoot.FormRow rows={2}>
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
          />
          <Input
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
        </FormRoot.FormRow>
        <FormRoot.FormSubmit 
          onSubmit={form.onSubmit}
          urlVoltar="/ecommerce/pedido"
          title="Salvar"
        />
      </FormRoot.Form>
    </>
  );
}
