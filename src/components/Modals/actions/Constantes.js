export const CategoriaServicioResForm = (e, empty, data) => {
  if (empty) {
    return {
      Nombre_Categoria: e.target.NombreCategoria.value,
      Descripcion: e.target.DescripcionCategoria.value,
    };
  } else {
    return {
      id: data.id,
      Nombre_Categoria: e.target.NombreCategoria.value,
      Descripcion: e.target.DescripcionCategoria.value,
    };
  }
};

export const ServicioResForm = (e, empty, data) => {
  if (empty) {
    return {
      Nombre_Servicio: e.target.NombreServicio.value,
      Descripcion: e.target.DescripcionServicio.value,
      Categoria_Servicio: e.target.CategoriaServicio.value,
    };
  } else {
    return {
      id: data.id,
      Nombre_Servicio: e.target.NombreServicio.value,
      Descripcion: e.target.DescripcionServicio.value,
      Categoria_Servicio: e.target.CategoriaServicio.value,
    };
  }
};

export const ProveedorResForm = (e, empty, data) => {
  const selectedCategorias = Array.from(
    e.target.querySelectorAll('input[name="CategoriaServicio"]:checked')
  ).map((input) => input.value);
  const formData = {
    documento: e.target.documento.value,
    nombre: e.target.name.value,
    telefono: e.target.telefono.value,
    email: e.target.EmailProvider.value,
    direccion: e.target.AdressProvider.value,
    categoriaServicio: selectedCategorias,
  };
  if (!empty) {
    formData.id = data.id;
  }
  return formData;
};
