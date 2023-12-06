import Swal from "sweetalert2";
import { ApiDelete, ApiPut } from "../../hooks/useApi";
export async function AlertStatus(url, table) {
  let data = "Esta siendo utilizado en otra parte";
  try {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¡Se cambiará el estado!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, Cambiarlo!",
      cancelButtonText: "Cancelar",
    });
    if (result.isConfirmed) {
      let apiResponse = await ApiPut(url, table); // Esperar la respuesta de ApiPut
      if (apiResponse.status === 200) {
        apiResponse;
        ("Entro☢️");
        data = apiResponse ? apiResponse.message : data;
        Swal.fire({
          icon: "success",
          title: "Actualizado!",
          text: data,
        });
      } else if (apiResponse.response.status === 400) {
        ("Entro🍌");
        Swal.fire({
          icon: "error",
          title: "Problema!",
          text: "No se puede actualizar, la categoria esta inactiva",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Problema",
          text: "Problemas en la API",
        });
      }
    }
    return result;
  } catch (error) {
    error;
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: data,
    });
    return error;
  }
}

export async function AlertDelete(url, table) {
  let data = "Esta siendo utilizado en otra parte";
  try {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¡Se eliminará permanentemente!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, Elimínelo!",
      cancelButtonText: "Cancelar",
    });
    if (result.isConfirmed) {
      url, table;
      let apiResponse = await ApiDelete(url, table);

      if (apiResponse) {
        Swal.fire({
          icon: "success",
          title: "eliminado...",
          text: "Eliminado con éxito",
        });
        return result;
      } else {
        Swal.fire({
          icon: "error",
          title: "no eliminado...",
          text: data,
        });
        return result;
      }
    } else {
      return result;
    }
  } catch (error) {
    console.error(error);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: data,
    });
  }
}

///DUFAINER//
export function AlertDuplicate(mensaje) {
  return Swal.fire({
    icon: "error",
    title: "Error...",
    text: mensaje,
  });
}

////

export function AlertSuccess(title) {
  ("success");
  return Swal.fire({
    position: "center",
    icon: "success",
    title: title,
    showConfirmButton: false,
    timer: 1500,
  });
}
export function AlertError() {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
  });
}
export function AlertErrorLog(Error) {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: Error,
  });
}

export function AlertIngresandoLogin() {
  return Swal.fire({
    position: "top-center",
    icon: "success",
    title: "Validando información",
    showConfirmButton: false,
    timer: 1500,
  });
}
// AlertInfo
export function AlertInfo(title, details) {
  return Swal.fire({
    icon: "info",
    title: title,
    text: details,
  });
}
export function AlertDirection (directionStructure) {
  Swal.fire({
    title: "Dirección",
    text: `${directionStructure}`,
   
  })
};
