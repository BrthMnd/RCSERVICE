/* eslint-disable react/prop-types */
import { Employed_Modal } from "./Employed.modal.jsx";
const UserModalSelector = (props) => (
  <>{props.tipo == "Empleados" && <Employed_Modal />}</>
);
export default UserModalSelector;
