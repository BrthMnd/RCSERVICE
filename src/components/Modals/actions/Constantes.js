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

export const ProveedorResForm = (e, empty, data, direccion) => {
  const selectedCategorias = Array.from(
    e.target.querySelectorAll('input[name="CategoriaServicio"]:checked')
  ).map((input) => input.value);
  console.log(e.target.documento.value);
  const formData = {
    documento: e.target.documento.value,
    nombre: e.target.name.value,
    telefono: e.target.telefono.value,
    email: e.target.EmailProvider.value,
    direccion: direccion,
    categoriaServicio: selectedCategorias,
  };
  if (!empty) {
    formData.id = data.id;
  }
  return formData;
};
export const OffersResForm = (e, empty, data) => {
  if (empty) {
    return {
      description: e.target.texArea.value,
      id_property: e.target.SelectInm.value,
      id_service: e.target.SelectService.value,
    };
  } else {
    return {
      id: data.id,
      description: e.target.texArea.value,
      id_property: e.target.SelectInm.value,
      id_service: e.target.SelectService.value,
      id_OfferStatus: e.target.SelectOffersStatus.value,
    };
  }
};
export const ContractingProvider = (e, empty, data) => {
  return {
    id_offers: data.id_offers._id,
    id_proveedor: e.target.radio.value,
    id_candidates: data._id,
  };
};
