import { TextSpecial } from "../TextSpecials/textSpecial.component";

export default function PropietarioInfo ({todo}){

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
        // nombreCompleto: Owner.nombre,
        //   email: `${Owner.correo}`,
        //   estadoPropietario: status,
        //   //
        //   nombre: Owner.nombre,

        //   documento: Owner.documento,
        //   correo: Owner.correo,
        //   telefono: Owner.telefono,
        //   direccion: Owner.direccion,