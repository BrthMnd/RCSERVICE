/* eslint-disable react/prop-types */
import { FormOwner } from "./owners.modal";
import { FormProperty } from "./property.modal";
import { FormManager } from "./manager.modal";

const PropertysModalsSelector = (props) => (
  <>
    {props.tipo == "Encargado" && <FormManager />}
    {props.tipo == "Propietario" && <FormOwner />}
    {props.tipo == "Inmueble" && <FormProperty />}
  </>
);
export default PropertysModalsSelector;
