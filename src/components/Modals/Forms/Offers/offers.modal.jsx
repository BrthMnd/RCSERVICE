import { useDispatch, useSelector } from "react-redux";
import { ApiPut, useApiGet2 } from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import { changeDataVoid } from "../../../../features/modal/moda.slice";
import { useApiPost } from "../../../../hooks/useApi";
const URLPropia = "https://rcservice.onrender.com/api/ofertas/oferta";
const urlservicio = "https://rcservice.onrender.com/api/proveedores/servicios";
const urlInmueble = "https://rcservice.onrender.com/api/inmuebles/inmueble";

export function FormOffer() {
  const [empty, setEmpty] = useState(true);
  const dispatch = useDispatch();

  let data = useSelector((state) => state.modal.data);

  const [data1, loading1, error1, data2, error2, loading2] = useApiGet2(
    urlInmueble,
    urlservicio
  );
  const HandlePost = (e) => {
    e.preventDefault();

    const resultado = {
      description: e.target.texArea.value,
      id_property: e.target.SelectInm.value,
      id_service: e.target.SelectService.value,
      id_status: "64f8e4735353c7264464d91f",
    };
    // dispatch(changeDataVoid());
    useApiPost(URLPropia, resultado);
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
      {(loading2 || loading1) && <div>CARGANDO.....</div>}
      {(error1 || error2) && (
        <div>
          <p>{error2}</p>
          <p>{error1}</p>
        </div>
      )}
      {!loading2 && !loading1 && !error1 && !error2 && (
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
                    placeholder="Descripcion"
                    rows="5"
                    required
                    name="texArea"
                    defaultValue={empty ? "" : data.description}
                  ></textarea>
                  <label htmlFor="descripcionTextarea">Descripcion</label>
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
