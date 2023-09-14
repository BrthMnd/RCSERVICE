export function CategoriaServicioModal(props) {
  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="inputIdCategoria" className="form-label">
              ID de Categoría
            </label>
            <input
              type="text"
              className="form-control"
              id="inputIdCategoria"
              placeholder="Ingrese el ID de la categoría"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputNombreCategoria" className="form-label">
              Nombre de la Categoría
            </label>
            <input
              type="text"
              className="form-control"
              id="inputNombreCategoria"
              placeholder="Ingrese el nombre de la categoría"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="inputDescripcionCategoria" className="form-label">
              Descripción de la Categoría
            </label>
            <textarea
              className="form-control"
              id="inputDescripcionCategoria"
              rows="4"
              placeholder="Ingrese una descripción de la categoría"
            ></textarea>
          </div>
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}
