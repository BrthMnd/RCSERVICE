/* eslint-disable react/prop-types */
import { ServiceModal } from "./service.modal";
import { CategoriaServicioModal } from "./service.categority.modal";

const ServiceModalSelector = (props) => (
  <>
    {props.tipo == "Servicio" && <ServiceModal />}
    {props.tipo == "Categoria Servicio" && <CategoriaServicioModal />}
  </>
);
export default ServiceModalSelector;
