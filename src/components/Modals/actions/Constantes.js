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
