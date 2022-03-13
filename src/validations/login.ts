import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(4, "O nome deve ter no minímo 4 caracteres")
    .required("O campo é obrigatório"),
  password: yup
    .string()
    .min(5, "A senha deve ter no minímo 5 caracteres")
    .required("O campo é obrigatório"),
});
