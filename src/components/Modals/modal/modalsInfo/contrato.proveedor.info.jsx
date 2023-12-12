import { TextSpecial } from "../TextSpecials/textSpecial.component";

export default function ContratoProveedorInfo({ todo }) {
  return (
    <>
     

      <div className="col-md-6">
        <label className="form-label">Servicio a prestar</label>
        <p>{todo.servicio}</p>
      </div>
      <div className="col-md-6">
        <label className="form-label">Descripción de la oferta</label>
        <p>{todo.description}</p>
      </div>

      <div className="col-md-6">
        <label className="form-label">Estado del contrato</label>
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
        <label className="form-label">Dirección del inmueble</label>
        <p>{todo.direccion_propiedad}</p>
      </div>
    </>
  );
}