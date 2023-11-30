import * as yup from "yup";

export const UserUpdateValidation = yup.object().shape({
  direction: yup.string().required("La dirección es requerida"),
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
