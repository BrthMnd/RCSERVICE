import { useSelector } from "react-redux";
import { ApiGet, ApiPost } from "../../../../hooks/useApi";

export function CandidateForms() {
  const url_Proveedores =
    "https://rcservice.onrender.com/api/proveedores/proveedor";
  const url = "https://rcservice.onrender.com/api/ofertas/candidato";
  const dataRedux = useSelector((state) => state.modal.data);
  const [data, loading, error] = ApiGet(url_Proveedores);
  const handleClick = (e) => {
    e.preventDefault();
    const resultado = {
      id_offers: dataRedux.id,
      id_ServiceProvider: e.target.exampleRadios.value,
      id_ContratingStatus: "6502cf98ce778b239ad87fff",
    };
    ApiPost(url, resultado);
  };

  return (
    <>
      {loading && <div>CARGANDO.....</div>}
      {error && <div>{error.message}</div>}
      {!loading && !error && (
        <form className="row g-3" onSubmit={handleClick}>
          <div className="col-md-12">
            <div className="card rounded shadow p-3">
              <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Proveedores</th>
                      <th scope="col">Teléfono</th>
                      <th scope="col">Email</th>
                      <th scope="col">Calificación</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((items, index) => {
                      let calificacion = Math.floor(Math.random() * (0 + 5));
                      return (
                        <tr key={index}>
                          <td>
                            {items.Nombre} {items.Apellido}
                          </td>
                          <td>{items.telefono}</td>
                          <td>{items.Email}</td>
                          <td>{calificacion}</td>
                          <td>
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="radio"
                                role="switch"
                                name="exampleRadios"
                                id={`exampleRadio${index}`}
                                value={items._id}
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
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
      )}
    </>
  );
}
