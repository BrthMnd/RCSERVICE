export function FormOffer() {
  return (
    <form className="row g-3">
      <div className="col-md-6">
        <div className="input-group has-validation">
          <span className="input-group-text">🏠</span>
          <div className="form-floating">
            <select
              className="form-select"
              id="inmuebleSelect"
              aria-label="Default select example"
              required
            >
              <option defaultValue>Seleccionar inmueble</option>
              <option value="apartamento">Apartamento</option>
              <option value="casa">Casa</option>
              <option value="oficina">Oficina</option>
            </select>
            <label htmlFor="inmuebleSelect">Inmueble</label>
          </div>
        </div>

        <div className="input-group has-validation mt-3">
          <span className="input-group-text">🧰</span>
          <div className="form-floating">
            <select
              className="form-select"
              id="servicioSelect"
              aria-label="Default select example"
              required
            >
              <option defaultValue>Servicios</option>
              <option value="limpieza">Limpieza</option>
              <option value="mantenimiento">Mantenimiento</option>
              <option value="reparacion">Reparación</option>
            </select>
            <label htmlFor="servicioSelect">Servicios</label>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="d-flex flex-column h-100">
          <div className="input-group has-validation mb-3">
            <div className="form-floating flex-grow-1">
              <textarea
                className="form-control h-100"
                id="descripcionTextarea"
                placeholder="Descripcion"
                rows="5"
                required
              ></textarea>
              <label htmlFor="descripcionTextarea">Descripcion</label>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 text-end">
        <button type="submit" className="btn btn-primary">
          Crear
        </button>
      </div>
    </form>
  );
}
