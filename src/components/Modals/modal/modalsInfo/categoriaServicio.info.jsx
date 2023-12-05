import { TextSpecial } from "../TextSpecials/textSpecial.component";

export default function CategoriaServicioInfo({ todo }) {
  todo;

  return (
    <>
      <div className="col-md-6">
        <label className="form-label">Nombre de la categoría</label>
        <p>{todo.nombreCategoria}</p>
      </div>

      <div className="col-md-6">
        <label className="form-label">Descripción</label>
        <p>{todo.descripcion}</p>
      </div>

      <div className="col-md-6">
        <label className="form-label">Fecha de creación</label>
        <p>{todo.fechaCreacion}</p>
      </div>

      <div className="col-md-6">
        <label className="form-label">Estado</label>
        <p>{todo.Estado}</p>
      </div>
    </>
  );
}
// nombreCategoria: Categority.Nombre_Categoria,
//           descripcion: Categority.Descripcion,
//           fechaCreacion: Categority.Fecha_Creacion,
//           Estado: estado,
