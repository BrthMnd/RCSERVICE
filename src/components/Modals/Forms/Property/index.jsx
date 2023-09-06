import {FormOwner } from "./owners.modal";
import { FormProperty } from "./property.modal";



const PropertysModalsSelector = (props) => (
    <>
      {props.tipo == "Propietarios" && <FormOwner/>}
      {props.tipo == "Inmueble" && <FormProperty />}
    </>
  );
  export default PropertysModalsSelector;