import * as yup from "yup";

export const UserUpdateValidation = yup.object().shape({
  direccion: yup
    .string()
    .required("La dirección es requerida")
    .matches(
      /^[A-Za-z0-9\s#\-]+$/,
      "La dirección debe contener letras, números y caracteres especiales permitidos (#, -)"
    )
    .max(255, "La dirección no puede tener más de 255 caracteres"),
  documento: yup
    .number()
    .positive("No puede ser un numero negativo")
    .integer("no puede contener números con decimales")
    .required("El documento es requerido"),
  telefono: yup
    .number()
    .positive("No puede ser un numero negativo")
    .integer("no puede contener números con decimales")
    .required("El teléfono es requerido"),
});

export const propertyValidation= yup.object({

  documento: yup
  .number()
  .positive("No puede ser un numero negativo")
  .integer("no puede contener números con decimales")
  .required("El documento es requerido"),
  telefono: yup
  .number()
  .positive("No puede ser un numero negativo")
  .integer("no puede contener números con decimales")
  .required("El teléfono es requerido"),
});