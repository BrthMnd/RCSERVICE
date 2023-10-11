import { useDispatch, useSelector } from "react-redux";
import { ApiGetById, ApiPost } from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import { changeReload } from "../../../../features/modal/moda.slice";

export function CandidateForms() {
	let api = import.meta.env.VITE_API_URL;
  const url = api+"/api/ofertas/candidato";
  const dataRedux = useSelector((state) => state.modal.data);
  const [count, setCount] = useState(0); // Estado para almacenar el recuento
  const dispatch = useDispatch();

  const [data, loading, error] = ApiGetById(url, dataRedux.id);
  const handleClick = (e) => {
    e.preventDefault();
    // const resultado = {};
    // ApiPost(url_contrato, resultado);
    dispatch(changeReload());
  };

  useEffect(() => {
    // Verificamos si data.id_ServiceProvider es un array y obtenemos su longitud
    if (!loading && !error && data) {
      console.log(data.id_ServiceProvider.length);
      setCount(data.id_ServiceProvider.length);
    } else {
      setCount(0); // Establecemos el recuento en cero si no hay datos válidos
    }
  }, [error, loading, data]);

  return (
    <>
      {loading && <div>CARGANDO.....</div>}
      {error && <div>{error.message}</div>}
      {!loading && !error && count == 0 && (
        <div className="d-flex justify-content-center">
          Nadie a aplicado aún
        </div>
      )}
      {!loading && !error && count != 0 && (
        <form className="row g-3" onSubmit={handleClick}>
          <div className="col-md-12">
            <div className="card rounded shadow p-3">
              <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Teléfono</th>
                      <th>Email</th>
                      <th>Dirección</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.id_ServiceProvider.map((provider, index) => {
                      return (
                        <tr key={index}>
                          <td>{provider.Nombre}</td>
                          <td>{provider.Apellido}</td>
                          <td>{provider.telefono}</td>
                          <td>{provider.Email}</td>
                          <td>{provider.Direccion}</td>
                          <td>
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="radio"
                                role="switch"
                                name="exampleRadios"
                                id={`exampleRadio${index}`}
                                value={provider._id}
                                required
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
            <button
              type="submit"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Aceptar
            </button>
          </div>
        </form>
      )}
    </>
  );
}
