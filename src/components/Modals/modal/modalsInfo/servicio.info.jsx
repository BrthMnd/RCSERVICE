import { TextSpecial } from "../TextSpecials/textSpecial.component";

export default function ServicioInfo ({todo}){
    console.log(todo)

    return(
        <>
        <div className="col-md-6">
    <label className="form-label">Nombre del servicio</label>
    <p>{todo.nameService}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Descripción</label>
    <p>{todo.description}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Nombre de la categoría</label>
    <p>{todo.nameCategority}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Estado</label>
    <p>{todo.estado}</p>
</div>

   

        </>

    )
}
// nameService: service.Nombre_Servicio,
//           description: service.Descripcion,
//           estado: estado,
//           nameCategority: service.Categoria_Servicio
//             ? service.Categoria_Servicio.Nombre_Categoria
//             : "N/A",
//           id_category: service.Categoria_Servicio._id,