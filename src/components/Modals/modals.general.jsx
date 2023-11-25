import { useDispatch, useSelector } from "react-redux";

import { ModalGeneral } from "./modal/ModalGeneral.modal";
import { ModalDirection } from "./modal/ModalDireccition.modal";
import { ModalUserUpdate } from "./modal/UpdateUser.modal";
export function Modal({ children }) {
  const Titulo = useSelector((state) => state.modal.type);
  const direction = useSelector((state) => state.direction.direction);
  const titleProperty = () => {
    if (
      Titulo == "Candidatos de Oferta" ||
      Titulo == "Inmueble" ||
      Titulo == "Encargado" ||
      Titulo == "Propietario"
    ) {
      return "modal-xl";
    } else {
      return "modal-lg";
    }
  };
  return (
    <>
      <ModalGeneral
        titleProperty={titleProperty}
        Titulo={Titulo}
        children={children}
      />
      <ModalUserUpdate titleProperty={titleProperty} Titulo={Titulo} />
      <ModalDirection direction={direction} />
    </>
  );
}
