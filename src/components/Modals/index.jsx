import { Modal } from "./modals.general";
import OffersModals from "./Forms/Offers";
import ServiceModal from "./Forms/services";
import PropertysModals from "./Forms/Property";
import ProviderModals from "./Forms/Providers";
import { useSelector } from "react-redux";

export default function ModalG() {
  const { type } = useSelector((state) => state.modal);
  return (
    <>
      <Modal>
        <OffersModals tipo={type} />
        <ServiceModal tipo={type} />
        <PropertysModals tipo={type} />
        <ProviderModals tipo={type} />
      </Modal>
    </>
  );
}
