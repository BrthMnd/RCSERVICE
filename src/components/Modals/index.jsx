import { Modal } from "./modals.general";
import OffersModals from "./Forms/Offers";
import ServiceModal from "./Forms/services";
import PropertysModals from "./Forms/Property";
import ProviderModals from "./Forms/Providers";
import UsersModals from "./Forms/user";
import InmuebleInfo from './info/inmueble.info.modal'
import { useSelector } from "react-redux";

export default function ModalG() {
  const { type, category } = useSelector((state) => state.modal);
  return (
    <>
      <Modal>
        {/* {!category ? (
          <>
            <OffersModals tipo={type} />
            <ServiceModal tipo={type} />
            <PropertysModals tipo={type} />
            <ProviderModals tipo={type} />
            <UsersModals tipo={type} />
          </>
        ) : (
          <> */}
            <InmuebleInfo tipo={type} />

          {/* </>
        )} */}
      </Modal>
    </>
  );
}
