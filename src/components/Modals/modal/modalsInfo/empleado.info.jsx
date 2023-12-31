import { TextSpecial } from "../TextSpecials/textSpecial.component";

export default function EmpleadoInfo ({todo}){

    return(
        <>
        <div className="col-md-6">
    <label className="form-label">Documento</label>
    <p>{todo.documento}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Nombre</label>
    <p>{todo.name}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Teléfono</label>
    <p>{todo.phone}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Correo</label>
    <p>{todo.Email}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Dirección</label>
    <p>{todo.Address}</p>
</div>


        </>

    )
}
