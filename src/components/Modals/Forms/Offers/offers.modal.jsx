import { useDispatch, useSelector } from "react-redux";
import { ApiPut, ApiGet2, ApiPost } from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import { changeDataVoid } from "../../../../features/modal/moda.slice";
import { useNavigate } from "react-router-dom";
let api = import.meta.env.VITE_API_URL;
const urlservicio = api+"/api/proveedores/servicios";
const urlInmueble = api+"/api/inmuebles/inmueble";
const url_Candidate = api+"/api/ofertas/candidato";
export function FormOffer() {
  const navigate = useNavigate();
  const URLPropia = useSelector((state) => state.modal.url);
  const [empty, setEmpty] = useState(true);
  const dispatch = useDispatch();

  let data = useSelector((state) => state.modal.data);

  const [data1, data2, loading, error] = ApiGet2(urlInmueble, urlservicio);
  console.log(data1);
  const recargarPagina = () => {
    navigate("/ofertas/oferta");
  };
  const HandlePost = async (e) => {
    e.preventDefault();

    const resultado = {
      description: e.target.texArea.value,
      id_property: e.target.SelectInm.value,
      id_service: e.target.SelectService.value,
    };
    // dispatch(changeDataVoid());
    const data = await ApiPost(URLPropia, resultado);

    const resultsForCandidate = {
      id_offers: data._id,
      id_ServiceProvider: [],
      id_CandidateStatus: "65178952b705e982ef7ee1d1",
    };
    ApiPost(url_Candidate, resultsForCandidate);

    recargarPagina();

    dispatch(changeDataVoid());
  };
  const HandlePut = (e) => {
    e.preventDefault();

    const resultado = {
      id: data.id,
      description: e.target.texArea.value,
      id_property: e.target.SelectInm.value,
      id_service: e.target.SelectService.value,
      id_status: "64f8e4735353c7264464d91f",
    };
    ApiPut(URLPropia, resultado);
    dispatch(changeDataVoid());
  };
  useEffect(() => {
    console.log("effect");
    if (Object.keys(data).length != 0) {
      setEmpty(false);
    }
  }, [data]);

  return (
    <>
      {loading && <div>CARGANDO.....</div>}
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
                  defaultValue={empty ? "" : data.id_property}
                >
                  {data1?.map((items, index) => {
                    return (
                      <option key={index} value={items._id}>
                        {items.tipoPropiedad}
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
                  defaultValue={empty ? "" : data.id_service}
                >
                  {data2?.map((items, index) => {
                    return (
                      <option key={index} value={items._id}>
                        {items.Nombre_Servicio}
                      </option>
                    );
                  })}
                </select>
                <label htmlFor="servicioSelect">Servicios</label>
              </div>
            </div>
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
                    defaultValue={empty ? "" : data.description}
                  ></textarea>
                  <label htmlFor="descripcionTextarea">Descripción</label>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 text-end">
            <button type="submit" className="btn btn-primary">
              {empty ? "Crear" : "Actualizar"}
            </button>
          </div>
        </form>
      )}
    </>
  );
}
