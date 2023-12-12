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

export const propertyValidation = yup.object({
  documento: yup.string()
    .matches(/^\d+$/, 'El documento solo puede contener números')
    .min(5, 'El documento debe ser igual o mayor a 5')
    .max(10, 'El documento debe ser igual o menor a 10')
    .required('El documento es obligatorio'),
  nombre: yup.string().required('El nombre es obligatorio'),
  correo: yup.string().email('Ingresa un correo válido').required('El correo es obligatorio'),
  telefono: yup.string()
    .matches(/^\d+$/, 'El teléfono solo puede contener números')
    .required('El teléfono es obligatorio'),
  direccion: yup.string().required('La dirección es obligatoria'),
  tipoDocumento: yup.string().required('El tipo de documento es obligatorio'),
});
export const propertyValidationSchema = yup.object().shape({
  tipoPropiedad: yup.string().required('El tipo de propiedad es requerido'),
  nBanos: yup.number().min(0, 'Número de baños no puede ser menor que 0').required('Número de baños es requerido'),
  metrosCuadrados: yup.number().min(0, 'Metros cuadrados no pueden ser menores que 0').required('Metros cuadrados son requeridos'),
  nHabitaciones: yup.number().min(0, 'Número de habitaciones no puede ser menor que 0').required('Número de habitaciones es requerido'),
  id_propietario: yup.string().required('Propietario es requerido'),
  id_encargado: yup.string().required('Encargado es requerido'),
  
});
export const CalificationValidation = yup.object({
  Comentarios: yup
    .string()
    .required("Comentarios es obligatorio")
    .max(30, "Comentarios no puede superar los 30 caracteres"),

  CalificacionesFloat: yup
    .number()
    .required("CalificacionesFloat es obligatorio")
    .min(0, "La calificación mínima es 0")
    .max(5, "La calificación máxima es 5"),
});
