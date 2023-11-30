import { TextSpecial } from "../TextSpecials/textSpecial.component";

export default function OfertaEstadoInfo ({todo}){

    return(
        <>
        <div className="col-md-6">
    <label className="form-label">Nombre</label>
    <p>{todo.name}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Descripción</label>
    <p>{todo.description}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Estado</label>
    <p>{todo.estado ? 'Activo' : 'Inactivo'}</p>
</div>


        </>

    )
}
// name: items.name,
//           description: items.description,
//           estado: items.estado,