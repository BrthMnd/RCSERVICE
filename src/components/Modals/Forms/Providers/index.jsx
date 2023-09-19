import {ProvidersModal} from "./Providers.modal";
// import { RatingsModal } from "./Ratings.modal";

const ProviderModalSelector = (props) => (
  <>
    {props.tipo == "Proveedores" && <ProvidersModal />}
    {/* {props.tipo == "Calificacion" && <RatingsModal/>} */}
  </>
);
export default ProviderModalSelector;
