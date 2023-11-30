import { InfoProperty } from "./Inmuebles/InfoProperty";

const InfoInmuebleModal = ({tipo}) => (

  <>
    {tipo == "Inmueble" && <InfoProperty />}
  </>
);
export default InfoInmuebleModal;