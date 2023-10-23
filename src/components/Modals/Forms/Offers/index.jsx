/* eslint-disable react/prop-types */
import { CandidateForms } from "./candidate.modal";
import { FormOffer } from "./offers.modal";
import { ContratingStatus } from "./contratingStatus.modal";
import { CandidateEdit } from "./candidate.update.modal";
const OffersModalsSelector = (props) => (
  <>
    {props.tipo == "Ofertas" && <FormOffer />}
    {props.tipo == "Candidatos de Oferta" && <CandidateForms />}
    {props.tipo == "Candidato" && <CandidateEdit />}
    {props.tipo == "Estados De Oferta" && <ContratingStatus />}
  </>
);
export default OffersModalsSelector;
