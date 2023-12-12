import { useDispatch, useSelector } from "react-redux";
import { ApiGetById } from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import { IconLoading } from "../../../../Utils/IconsLoading";
import { HandlePost } from "../../actions/handle.click";
import { ContractingProvider } from "../../actions/Constantes";
import { Tooltip } from "react-tooltip";
const url_candidateForOffers = import.meta.env.VITE_URL_CANDIDATE_FOR_OFFER;
const url_contrato = import.meta.env.VITE_URL_CONTRACTING;

export function CandidateForms() {
  const dataRedux = useSelector((state) => state.modal.data);
  const [count, setCount] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();
  const [data, loading, error] = ApiGetById(
    url_candidateForOffers,
    dataRedux.id
  );

  useEffect(() => {
    // Verificamos si data.id_ServiceProvider es un array y obtenemos su longitud
    if (!loading && !error && data) {
      console.log(data)
      data.result.id_ServiceProvider.map((provider) => {
        return data.user.map((users) => {
          console.log(users.roleRef == provider._id);
          if (users.roleRef == provider._id && users.estado) {
            setCount(data.result.id_ServiceProvider.length);
          }
        });
      });
    } else {
      setCount(0); // Establecemos el recuento en cero si no hay datos válidos
    }
  }, [error, loading, data]);
  const mediaReduce = (score) => {
    console.log("////////////////////");
    console.log("////////////////////", score);
    return "none";
    // if (score.length === 0) {
    //   return 'Aun sin Nota'
    // }

    // const suma = score.reduce(
    //   (acumulador, valor) => acumulador + valor.CalificacionesFloat,
    //   0
    // );
    // const promedio = suma / score.length;
    //   return promedio
  };
  return (
    <>
      <IconLoading isLoading={loading} />
      {error && <div>{error.message}</div>}
      {!loading && !error && count == 0 && (
        <div className="d-flex justify-content-center">
          Nadie a aplicado aún
        </div>
      )}
      {!loading && !error && count != 0 && (
        <form
          className="row g-3"
          onSubmit={(e) =>
            HandlePost(
              e,
              setErrorMsg,
              dispatch,
              url_contrato,
              ContractingProvider(e, false, data)
            )
          }
        >
          <div className="col-md-12">
            <div className="card rounded shadow p-3">
              <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Calificación</th>
                      <th>Teléfono</th>
                      <th>Dirección</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.result.id_ServiceProvider.map((provider, index) => {
                      return data.user.map((users) => {
                        console.log(users.roleRef == provider._id);
                        if (users.roleRef == provider._id && users.estado) {
                          return (
                            <tr key={index}>
                              <td>{provider.nombre}</td>
                              <td>{mediaReduce(provider.id_calificacion)}</td>
                              <td>{provider.telefono}</td>
                              <td>{provider.direccion}</td>
                              <td>
                                <div className="form-check form-switch">
                                  <input
                                    data-tooltip-id="botonCheck"
                                    data-tooltip-content="Aceptar"
                                    className="form-check-input"
                                    type="radio"
                                    role="switch"
                                    name="radio"
                                    id={`exampleRadio${index}`}
                                    value={provider._id}
                                    required
                                  />
                                  <Tooltip
                                    id="botonCheck"
                                    place="bottom"
                                  ></Tooltip>
                                </div>
                              </td>
                            </tr>
                          );
                        }
                      });
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
          <div className="col-md-12 text-center mt-3">
            <button
              data-tooltip-id="botonCrear"
              data-tooltip-content="Crear"
              type="submit"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              CREAR
            </button>
            <Tooltip id="botonCrear" place="bottom"></Tooltip>
          </div>
        </form>
      )}
    </>
  );
}
