import { TextSpecial } from "../TextSpecials/textSpecial.component";

export default function InmueblesInfo ({todo}){
    console.log(todo)

    return(
        <>
       <div className="col-md-6">
    <label className="form-label">Dirección</label>
    <p>{todo.direccion}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Metros cuadrados</label>
    <p>{todo.metrosCuadrados}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Cantidad de baño</label>
    <p>{todo.nBanos}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Fecha de construcción</label>
    <p>{todo.fechConstruccion}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Nombre del propietario</label>
    <p>{todo.nombreCompletoOwner}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Teléfono del propietario</label>
    <p>{todo.phoneOwner}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Nombre del encargado</label>
    <p>{todo.nombreCompletoManager}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Teléfono del encargado</label>
    <p>{todo.phoneOwner}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Documento del arrendatario</label>
    <p>{todo.documentox}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Nombre del arrendatario</label>
    <p>{todo.nombrex}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Correo del arrendatario</label>
    <p>{todo.correox}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Teléfono del arrendatario</label>
    <p>{todo.telefonox}</p>
</div>


        
        </>

    )
}
