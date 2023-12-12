/* eslint-disable react/prop-types */

export default function OfertaInfo({ todo }) {
  return (
    <>
      <div className="col-md-6">
        <label className="form-label">Tipo de inmueble</label>
        <p>{todo.TypeOfProperty}</p>
      </div>

      <div className="col-md-6">
        <label className="form-label">Fecha de publicación</label>
        <p>{todo.publicationDate}</p>
      </div>

      <div className="col-md-6">
        <label className="form-label">Descripción</label>
        <p>{todo.description}</p>
      </div>

      <div className="col-md-6">
        <label className="form-label">Dirección</label>
        <p>{todo.direction}</p>
      </div>

      <div className="col-md-6">
        <label className="form-label">Categoría de Servicio</label>
        <p>{todo.service}</p>
      </div>

      <div className="col-md-6">
        <label className="form-label">Estado</label>
        <p>{todo.Status}</p>
      </div>
    </>
  );
}
// TypeOfProperty: items.id_property.tipoPropiedad,
//           publicationDate: items.publicationDate,
//           description: items.description,
//           direction: items.id_property.direccion,
//           service: items.id_service.Nombre_Servicio,
//           Status: items.id_OfferStatus.name,
