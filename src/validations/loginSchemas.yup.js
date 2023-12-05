import * as yup from "yup";

export const SchemeLoginValidation = yup.object().shape({
  email: yup
    .string()
    .email("Ingresa un correo electrónico válido")
    .matches(
      /\.com$|\.es$|\.net$|\.org$/,
      "La extensión del correo no es válida"
    )
    .required("El correo es obligatorio"),
  //   password: yup
  //     .string()
  //     .min(8, "La contraseña debe tener al menos 8 caracteres")
  //     .matches(/[a-zA-Z]/, "La contraseña debe contener al menos una letra")
  //     .matches(/\d/, "La contraseña debe contener al menos un número")
  //     .required("La contraseña es obligatoria"),
});
export const SchemeRegisterValidation = yup.object().shape({
  email: yup
    .string()
    .email("Ingresa un correo electrónico válido")
    .matches(
      /\.com$|\.es$|\.net$|\.org$/,
      "La extensión del correo no es válida"
    )
    .required("El correo es obligatorio"),
  password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(/[a-zA-Z]/, "La contraseña debe contener al menos una letra")
    .matches(/\d/, "La contraseña debe contener al menos un número")
    .required("La contraseña es obligatoria"),
});
export const SchemeRecoveryValidation = yup.object().shape({
  email: yup
    .string()
    .email("Ingresa un correo electrónico válido")
    .matches(
      /\.com$|\.es$|\.net$|\.org$/,
      "La extensión del correo no es válida"
    )
    .required("El correo es obligatorio"),
});
export const SchemeCodeValidation = yup.object().shape({
  code: yup
    .string()
    .matches(
      /^\d{4}$/,
      "El código debe contener exactamente 4 dígitos numéricos"
    )
    .required("El código es obligatorio"),
});
export const SchemeChangePasswordValidation = yup.object().shape({
  password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(/[a-zA-Z]/, "La contraseña debe contener al menos una letra")
    .matches(/\d/, "La contraseña debe contener al menos un número")
    .required("La contraseña es obligatoria"),
});
