import { TextSpecial } from "../TextSpecials/textSpecial.component";

export default function ContratoInfo({ todo }) {
  return (
    <>
      <div className="col-md-6">
        <label className="form-label">Fecha de publicación de la oferta</label>
        <p>{todo.offer_publicationDate}</p>
      </div>

      <div className="col-md-6">
        <label className="form-label">Descripción de la oferta</label>
        <p>{todo.description}</p>
      </div>

      <div className="col-md-6">
        <label className="form-label">Estado de la oferta</label>
        <p>{todo.status}</p>
      </div>
      <div className="col-md-6">
        <label className="form-label">Nombre del proveedor</label>
        <p>{todo.name_provider}</p>
      </div>
      <div className="col-md-6">
        <label className="form-label">Documento del proveedor</label>
        <p>{todo.provider_documento}</p>
      </div>
      <div className="col-md-6">
        <label className="form-label">Teléfono del proveedor</label>
        <p>{todo.provider_telefono}</p>
      </div>
      <div className="col-md-6">
        <label className="form-label">Dirección del proveedor</label>
        <p>{todo.provider_direccion}</p>
      </div>
      <div className="col-md-6">
        <label className="form-label">Categorías del proveedor</label>
        <p>{todo.provider_categoriaServicio}</p>
      </div>
    </>
  );
}
// candidate_id: candidate._id,
//           provider_id: provider._id,
//           offer_id: offer._id,
//           offer_offerStatus: offer.id_OfferStatus,
//           offer_property: offer.id_property,
//           offer_service: offer.id_service,
//           index: index + 1,
//           //
//           offer_publicationDate: offer.publicationDate,
//           description: offer.description,
//           status: items.estado ? "En Proceso" : "Terminado",
//           fecha: items.DateApplied,
//           //
//           name_provider: candidate.selectedCandidate.nombre,
//           candidate_documento: candidate.selectedCandidate.documento,
//           candidate_telefono: candidate.selectedCandidate.telefono,
//           candidate_direccion: candidate.selectedCandidate.direccion,
//           //
//           provider_documento: provider.documento,
//           provider_telefono: provider.telefono,
//           provider_direccion: provider.direccion,
//           provider_categoriaServicio: provider.categoriaServicio,
