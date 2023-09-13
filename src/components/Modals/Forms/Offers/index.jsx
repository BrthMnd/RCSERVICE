/* eslint-disable react/prop-types */
import { CandidateForms } from "./candidate.modal";
import { FormOffer } from "./offers.modal";
import { StatusModal } from "./status.modal";

const OffersModalsSelector = (props) => (
  <>
    {props.tipo == "Ofertas" && <FormOffer />}
    {props.tipo == "Candidatos" && <CandidateForms />}
    {props.tipo == "Estados de Oferta" && <StatusModal />}
  </>
);
export default OffersModalsSelector;
