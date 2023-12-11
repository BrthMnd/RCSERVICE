import { useSelector } from "react-redux";

export const CategoriaServicioResForm = (e, empty, data) => {
  if (empty) {
    return {
      Nombre_Servicio: e.target.NombreCategoria.value,
      Descripcion: e.target.DescripcionCategoria.value,
    };
  } else {
    return {
      id: data.id,
      Nombre_Servicio: e.target.NombreCategoria.value,
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

export const ProveedorResForm = (
  e,
  empty,
  data,
  direccion,
  selectedCategories
) => {
  let documento = e.target.documento.value.toString();
  const selectedCategorias = selectedCategories.map(
    (category) => category.value
  );

  e.target.documento.value;
  const formData = {
    documento: documento,
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
export const EmployedResForm = (e, empty, data, direccion) => {
  let documento = e.target.documento.value.toString();

  const formData = {
    documento: documento,
    nombre: e.target.name.value,
    telefono: e.target.telefono.value,
    direccion: direccion,
    email: e.target.email.value,
    password: e.target.password.value,
    estado: true,
  };
  if (!empty) {
    formData.id = data.id;
  }
  return formData;
};
export const OffersResForm = (e, empty, data) => {
  console.log("🚀 ~ file: Constantes.js:77 ~ OffersResForm ~ data:", data);

  let json = {
    description: e.target.texArea?.value || data.description,
    id_property: e.target.SelectInm?.value || data.id_property,
    id_service: e.target.SelectService?.value || data.id_service,
  };
  console.log("🚀 ~ file: Constantes.js:86 ~ OffersResForm ~ json:", json);
  if (!empty) {
    json.id = data.id;
    json.state = e.target.Category?.value || data.Status;
  }
  console.log("🚀 ~ file: Constantes.js:91 ~ OffersResForm ~ json:", json);

  return json;
};
export const ContractingProvider = (e, empty, data) => {
  return {
    id_offers: data.id_offers._id,
    id_provider: e.target.radio.value,
    id_candidates: data._id,
  };
};
