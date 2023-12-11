import { useDispatch, useSelector } from "react-redux";
import { ApiGet } from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import Select from "react-select";
import { IconLoading } from "../../../../Utils/IconsLoading";
import { OffersResForm } from "../../actions/Constantes";
import { HandlePost, HandlePut } from "../../actions/handle.click";
const url_custom = import.meta.env.VITE_URL_GET_MODAL_OFFERS;

export function FormOffer() {
  const url = useSelector((state) => state.modal.url);
  const [empty, setEmpty] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  let modal_data = useSelector((state) => state.modal.data);

  const [state, setState] = useState(modal_data.Status);
  const [data, loading, error] = ApiGet(url_custom);
  useEffect(() => {
    ("effect");
    if (Object.keys(modal_data).length != 0) {
      setEmpty(false);
    }
  }, [modal_data]);
  const HandleChange = (e) => {
    e.preventDefault();
    setState(e.target.value);
  };
  return (
    <>
      <div>
        <IconLoading isLoading={loading} />
      </div>
      {error && (
        <div>
          <p>{error.message}</p>
        </div>
      )}
      {!loading && !error && (
        <form
          className="row g-3"
          onSubmit={(e) =>
            empty
              ? HandlePost(
                  e,
                  setErrorMsg,
                  dispatch,
                  url,
                  OffersResForm(e, empty, modal_data)
                )
              : HandlePut(
                  e,
                  setErrorMsg,
                  dispatch,
                  url,
                  OffersResForm(e, empty, modal_data)
                )
          }
        >
          <div className="col-md-6">
            {modal_data?.Status && modal_data?.Status !== "Disponible" ? (
              <></>
            ) : (
              <>
                <div className="input-group has-validation mt-3">
                  <span className="input-group-text">🏠</span>
                  <div className="form-floating">
                    <Select
                      id="inmuebleSelect"
                      aria-label="Default select example"
                      name="SelectInm"
                      styles={{
                        control: (baseStyles) => ({
                          ...baseStyles,
                        }),
                      }}
                      style={{ height: "200px" }}
                      options={data.property.map((items) => {
                        return {
                          value: items._id,
                          label: `${items.tipoPropiedad} - ${items.direccion}`,
                        };
                      })}
                      defaultValue={
                        empty
                          ? null
                          : {
                              value: modal_data.id_property,
                              label: `${modal_data.TypeOfProperty} - ${modal_data.direction}`,
                            }
                      }
                    />
                  </div>
                </div>

                <div className="input-group has-validation mt-4">
                  <span className="input-group-text">🧰</span>
                  <div className="form-floating">
                    <Select
                      id="servicioSelect"
                      aria-label="Default select example"
                      name="SelectService"
                      styles={{
                        control: (baseStyles) => ({
                          ...baseStyles,
                        }),
                      }}
                      options={data.service.map((items) => ({
                        value: items._id,
                        label: items.Nombre_Servicio,
                      }))}
                      defaultValue={
                        empty
                          ? null
                          : {
                              value: modal_data.id_service,
                              label: modal_data.service,
                            }
                      }
                    />
                  </div>
                </div>
              </>
            )}
          </div>
          {modal_data?.Status && modal_data?.Status != "Disponible" ? (
            <></>
          ) : (
            <div className="col-md-6">
              {/* Div para ajustar el tamaño del textarea */}
              <div className="d-flex flex-column h-100">
                <div className="input-group has-validation mb-3">
                  <div className="form-floating flex-grow-1">
                    <textarea
                      style={{ resize: "none" }}
                      className="form-control h-100"
                      id="descripcionTextarea"
                      placeholder="Descripción"
                      rows="5"
                      required
                      name="texArea"
                      defaultValue={empty ? "" : modal_data.description}
                    ></textarea>
                    <label htmlFor="descripcionTextarea">Descripción</label>
                  </div>
                </div>
              </div>
            </div>
          )}
          {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
          {empty || (modal_data.Status && modal_data.Status == "Disponible") ? (
            <></>
          ) : (
            <div className="input-group has-validation mt-3">
              <span className="input-group-text">⏩</span>
              <div className="form-floating">
                <select
                  className="form-select"
                  id="EstadosDeOferta"
                  aria-label="Estado"
                  name="Category"
                  defaultValue={empty ? "" : modal_data.Status}
                  onChange={HandleChange}
                >
                  <option value="Cotizado">Cotizado</option>
                  <option value="En Proceso">En Proceso</option>
                  <option value="Terminado">Terminado Por el Proveedor</option>
                  <option value="Auditado">Auditado</option>
                  <option value="Finalizado">Finalizado</option>
                </select>
                <label htmlFor="EstadosDeOferta">Estados de Oferta</label>
              </div>
            </div>
          )}
          <div className="col-md-12 text-center">
            {state == "Finalizado" ? (
              <button
                type="button"
                className="btn btn-primary mb-2"
                data-bs-target="#CalificarModal"
                data-bs-toggle="modal"
              >
                Calificar
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                {empty ? "Crear" : "Actualizar"}
              </button>
            )}
          </div>
        </form>
      )}
    </>
  );
}
