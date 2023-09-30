import Swal from "sweetalert2";
import { ApiDelete } from "../../hooks/useApi";
export function AlertDelete(url, table) {
  console.log("hola");
  return Swal.fire({
    title: "Estas seguro?",
    text: "Se eliminara permanente mente!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, Eliminalo!",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Eliminado!", "Tu Archivo a sido eliminado.", "success");
      ApiDelete(url, table);
    }
  });
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
