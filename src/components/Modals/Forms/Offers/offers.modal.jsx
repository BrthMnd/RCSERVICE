import { useDispatch, useSelector } from "react-redux";
import { ApiPut, ApiGet2, ApiPost, ApiGet } from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import {
  changeDataVoid,
  changeReload,
} from "../../../../features/modal/moda.slice";
import { CloseModal } from "../../../../assets/js/CloseModal";
import { IconLoading } from "../../../../Utils/IconsLoading";
const url = import.meta.env.VITE_URL_GET_MODAL_OFFERS;

export function FormOffer() {
  const URLPropia = useSelector((state) => state.modal.url);
  const [empty, setEmpty] = useState(true);
  const dispatch = useDispatch();

  let modal_data = useSelector((state) => state.modal.data);

  const [data, loading, error] = ApiGet(url);
  console.log(data);

  const HandlePost = async (e) => {
    e.preventDefault();

    const resultado = {
      description: e.target.texArea.value,
      id_property: e.target.SelectInm.value,
      id_service: e.target.SelectService.value,
    };
    ApiPost(URLPropia, resultado)
      .then((res) => {
        console.log(res);
        dispatch(changeReload());
        CloseModal();
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        dispatch(changeDataVoid());
      });
  };
  const HandlePut = (e) => {
    e.preventDefault();

    const resultado = {
      id: modal_data.id,
      description: e.target.texArea.value,
      id_property: e.target.SelectInm.value,
      id_service: e.target.SelectService.value,
    };
    ApiPut(URLPropia, resultado)
      .then((res) => {
        console.log(res);
        dispatch(changeReload());
        CloseModal();
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        dispatch(changeDataVoid());
      });
  };
  useEffect(() => {
    console.log("effect");
    if (Object.keys(modal_data).length != 0) {
      setEmpty(false);
    }
  }, [modal_data]);

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
        <form className="row g-3" onSubmit={empty ? HandlePost : HandlePut}>
          <div className="col-md-6">
            <div className="input-group has-validation">
              <span className="input-group-text">🏠</span>
              <div className="form-floating">
                <select
                  className="form-select"
                  id="inmuebleSelect"
                  aria-label="Default select example"
                  name="SelectInm"
                  defaultValue={empty ? "" : modal_data.id_property}
                >
                  {data?.map((items, index) => {
                    return (
                      <option key={index} value={items.property._id}>
                        {items.property.tipoPropiedad}
                      </option>
                    );
                  })}
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
                  name="SelectService"
                  defaultValue={empty ? "" : modal_data.id_service}
                >
                  {data?.map((items, index) => {
                    return (
                      <option key={index} value={items.service._id}>
                        {items.service.Nombre_Servicio}
                      </option>
                    );
                  })}
                </select>
                <label htmlFor="servicioSelect">Servicios</label>
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
                    name="SelectService"
                    defaultValue={empty ? "" : modal_data.id_OfferStatus}
                  >
                    {data?.map((items, index) => {
                      return (
                        <option key={index} value={items.offerStatus._id}>
                          {items.offerStatus.Nombre_Servicio}
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
