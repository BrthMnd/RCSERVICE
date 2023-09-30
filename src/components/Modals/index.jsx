import { Modal } from "./modals.general";
import OffersModals from "./Forms/Offers";
import ServiceModal from "./Forms/services";
import PropertysModals from "./Forms/Property";
import ProviderModals from "./Forms/Providers";
import { useSelector } from "react-redux";

export default function ModalG() {
  const tipo = useSelector((state) => state.modal.type);
  console.log("antes de ejecutar, cuanto vale tipo: ", tipo);
  return (
    <>
      <Modal>
        <OffersModals tipo={tipo} />
        <ServiceModal tipo={tipo} />
        <PropertysModals tipo={tipo} />
        <ProviderModals tipo={tipo}/>
      </Modal>
    </>
  );
}
