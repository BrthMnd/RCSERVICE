import { TextSpecial } from "../TextSpecials/textSpecial.component";

export default function ProveedorInfo ({todo}){

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
    <label className="form-label">Categorías</label>
    <p>{todo.nameCategority}</p>
</div>

<div className="col-md-6">
    <label className="form-label">Dirección</label>
    <p>{todo.Address}</p>
</div>


        </>

    )
}
// documento: provider.documento,
//           //
//           name: provider.nombre,
//           phone: provider.telefono,
//           Address: provider.direccion,
//           nameCategority: getCategoriasServicio(provider.categoriaServicio),
//           // ids
//           id_category: provider.categoriaServicio,