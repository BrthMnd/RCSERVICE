export const validarTelefono = (telefono) => {
  if (!telefono.trim()) {
    return "El campo de teléfono no puede estar vacío";
  }

  const regexTelefono = /^3\d{9}$/;
  return regexTelefono.test(telefono)
    ? ""
    : "El teléfono ingresado es inválido";
};
