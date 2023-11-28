/* eslint-disable react/prop-types */
import { Employed_Modal } from "./Employed.modal.jsx";
import { ProvidersModal } from "../Providers/Providers.modal.jsx";
const UserModalSelector = (props) => (
  <>
    {props.tipo == "Empleados" && <Employed_Modal />}
    {props.tipo == "Proveedores" && <ProvidersModal />}
  </>
);
export default UserModalSelector;
