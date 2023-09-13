/* eslint-disable react/prop-types */
import {  ServiceModal} from "./service.modal";

const ServiceModalSelector = (props) => (
  <>
    {props.tipo == "Servicio" && <ServiceModal />}
  </>
);
export default ServiceModalSelector;
