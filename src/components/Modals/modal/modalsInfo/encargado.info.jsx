import { TextSpecial } from "../TextSpecials/textSpecial.component";

export default function EncargadoInfo ({todo}){

    return(
        <>
        <div className="col-md-6">
    <label className="form-label">Documento</label>
    <p>{todo.documento}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Nombre</label>
    <p>{todo.nombreCompleto}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Teléfono</label>
    <p>{todo.telefono}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Correo</label>
    <p>{todo.email}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Dirección</label>
    <p>{todo.direccion}</p>
</div>


        </>

    )
}
