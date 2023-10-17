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
      console.log(apiResponse);
      data = apiResponse ? apiResponse.message : data;
      Swal.fire({
        icon: "success",
        title: "Actualizado!",
        text: data,
      });
    }
    return result;
  } catch (error) {
    console.log(error);
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
  let status = false;
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
      console.log(url, table);
      let apiResponse = await ApiDelete(url, table);

      if (apiResponse) {
        Swal.fire({
          icon: "success",
          title: "eliminado...",
          text: "Eliminado con exito",
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

export function AlertSuccess(title) {
  console.log("success");
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
