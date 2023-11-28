export const validarEmail = (email) => {
  if (!email.trim()) {
    return "El campo de email no puede estar vacío";
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email) ? "" : "El email ingresado es invalido";
};
