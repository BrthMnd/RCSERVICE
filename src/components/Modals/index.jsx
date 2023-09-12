import { Modal } from "./modals.general";
import OffersModals from "./Forms/Offers";
import PropertysModals from "./Forms/Property";
import { useSelector } from "react-redux";

export default function ModalG() {
  const tipo = useSelector((state) => state.modal.type);
  return (
    <>
      <Modal >
      
        <OffersModals tipo={tipo} />
        <PropertysModals tipo={tipo} />
      </Modal>
    </>
  );
}
