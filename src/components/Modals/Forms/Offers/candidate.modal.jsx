export function CandidateForms() {
  return (
    <form className="row g-3">
      <div className="col-md-12">
        {/* Contenedor con barra de desplazamiento */}
        <div className="card rounded shadow p-3">
          <div style={{ maxHeight: "300px", overflowY: "auto" }}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Proveedores</th>
                  <th scope="col">Servicios</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Proveedor 1</td>
                  <td>Servicio 1</td>
                  <td>
                    <div className="d-flex justify-content-end align-items-center">
                      <label className="form-check-label me-3">
                        <input className="form-check-input" type="checkbox" />
                        Toggle
                      </label>
                      <a className="btn btn-info">Más Info</a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="col-md-12 text-center mt-3">
        <button type="submit" className="btn btn-primary">
          Aceptar
        </button>
      </div>
    </form>
  );
}
