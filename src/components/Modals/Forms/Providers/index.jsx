/* eslint-disable react/prop-types */
import { ProvidersModal } from "./Providers.modal";
import { RatingsModal } from "./Ratings.modal";

const ProviderModalSelector = (props) => (
  <>
    {props.tipo == "Proveedores" && <ProvidersModal />}
    {props.tipo == "Calificaciones" && <RatingsModal />}
  </>
);
export default ProviderModalSelector;
