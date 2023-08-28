/* eslint-disable react/prop-types */
import { CandidateForms } from "./candidate.modal";
import { FormOffer } from "./offers.modal";

const OffersModalsSelector = (props) => (
  <>
    {props.tipo == "Ofertas" && <FormOffer />}
    {props.tipo == "Candidatos" && <CandidateForms />}
  </>
);
export default OffersModalsSelector;
