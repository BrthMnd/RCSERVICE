/* eslint-disable react/no-children-prop */
import { useDispatch, useSelector } from "react-redux";
import { ModalGeneral } from "./modal/ModalGeneral.modal";
import { ModalDirection } from "./modal/ModalDireccition.modal";
import { ModalInfo } from "./modal/ModalInfo.modal";
import {
  changeDataVoid,
  changeModalVoid,
} from "../../features/modal/moda.slice";
import {
  ChangeDirection,
  ChangeDirectionVoid,
} from "../../features/modal/address.slice";
import { ModalUserUpdate } from "./modal/UpdateUser.modal";
import { ModalCalificar } from "./modal/Calificar.modal";
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
      <ModalDirection direction={direction} />
      <ModalInfo />
      <ModalUserUpdate />
      <ModalCalificar />
    </>
  );
}
