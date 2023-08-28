import { Modal } from "./modals.general";
import OffersModals from "./Forms/Offers";
import { useSelector } from "react-redux";

export default function ModalG() {
  const tipo = useSelector((state) => state.modal.type);
  return (
    <>
      <Modal>
        <OffersModals tipo={tipo} />
      </Modal>
    </>
  );
}
