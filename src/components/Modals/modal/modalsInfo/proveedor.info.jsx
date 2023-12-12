import { TextSpecial } from "../TextSpecials/textSpecial.component";

export default function ProveedorInfo({ todo }) {
  console.log("👀", todo);

  const Categorias = () => {
    if (todo.categories && todo.categories.length > 0) {
      const categoryNames = todo.categories.map(
        (category) => category.Nombre_Categoria
      );
      return <p>{categoryNames.join(" - ")}</p>;
    } else {
      return <p>No tiene categorias</p>;
    }
  };

  return (
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
        {Categorias()}  
      </div>

      <div className="col-md-6">
        <label className="form-label">Dirección</label>
        <p>{todo.Address}</p>
      </div>
    </>
  );
}
// documento: provider.documento,
//           //
//           name: provider.nombre,
//           phone: provider.telefono,
//           Address: provider.direccion,
//           nameCategority: getCategoriasServicio(provider.categoriaServicio),
//           // ids
//           id_category: provider.categoriaServicio,
