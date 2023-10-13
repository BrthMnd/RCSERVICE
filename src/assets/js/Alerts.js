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
      window.location.reload();
    }
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: data,
    });
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
      confirmButtonText: "Sí, Elimínalo!",
      cancelButtonText: "Cancelar",
    });
    if (result.isConfirmed) {
      let apiResponse = await ApiDelete(url, table);
      console.log(apiResponse);
      data = apiResponse;

      Swal.fire({
        icon: "success",
        title: "Eliminado!",
        text: data,
      });
      window.location.reload();
    }
  } catch (error) {
    console.log(error);
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
