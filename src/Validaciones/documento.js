
export const validarDocumento = (documento) => {
    if (!documento.trim()) {
      return "El campo de documento no puede estar vacío";
    }
    const regexDocumento = /^[1-9]{1}\d{5,11}$/;
    if (!regexDocumento.test(documento)) {
      return "El documento ingresado es inválido";
    }
    return "";  // No hay error
  };
  