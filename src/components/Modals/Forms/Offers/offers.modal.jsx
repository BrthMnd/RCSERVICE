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

  const [data, loading, error] = ApiGet(url_custom);

  useEffect(() => {
    console.log("effect");
    if (Object.keys(modal_data).length != 0) {
      setEmpty(false);
    }
  }, [modal_data]);
  console.log("🏠", modal_data);

  if (data) {
    // console.log("🐸", data);
  }
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
                {console.log("🧿", modal_data.direction)}
              </div>
            </div>

            <div className="input-group has-validation mt-3">
              <span className="input-group-text">🧰</span>
              <div className="form-floating">
                {/* React-Select para Servicio */}
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
            {empty ? (
              <></>
            ) : (
              <div className="input-group has-validation mt-3">
                <span className="input-group-text">⏩</span>
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="servicioSelect"
                    aria-label="Default select example"
                    required
                    name="SelectOffersStatus"
                    defaultValue={empty ? "" : modal_data.id_OfferStatus}
                  >
                    {data.offerStatus.map((items, index) => {
                      return (
                        <option key={index} value={items._id}>
                          {items.name}
                        </option>
                      );
                    })}
                  </select>
                  <label htmlFor="servicioSelect">Servicios</label>
                </div>
              </div>
            )}
          </div>

          <div className="col-md-6">
            {/* Div para ajustar el tamaño del textarea */}
            <div className="d-flex flex-column h-100">
              <div className="input-group has-validation mb-3">
                <div className="form-floating flex-grow-1">
                  <textarea
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
          {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
          <div className="col-md-12 text-end">
            <button
              type="submit"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              {empty ? "Crear" : "Actualizar"}
            </button>
          </div>
        </form>
      )}
    </>
  );
}
