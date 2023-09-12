import { useApiGet2 } from "../../../../hooks/useApi";

import { useApiPost } from "../../../../hooks/useApi";
const URLPropia = "https://rcservice.onrender.com/api/ofertas/oferta";

export function FormOffer() {
  const urlservicio =
    "https://rcservice.onrender.com/api/proveedores/servicios";
  const urlInmueble = "https://rcservice.onrender.com/api/inmuebles/inmueble";

  const [data1, loading1, error1, data2, error2, loading2] = useApiGet2(
    urlInmueble,
    urlservicio
  );

  const HandlePost = (e) => {
    const result = {
      description: e.target.texArea.value,
      id_property: e.target.SelectInm.value,
      id_service: e.target.SelectService.value,
      id_status: "64f8e4735353c7264464d91f",
    };
    console.log(result);
    useApiPost(URLPropia, result);

    // data && console.log("exito");
    return;
  };

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
        <form className="row g-3" onSubmit={HandlePost}>
          <div className="col-md-6">
            <div className="input-group has-validation">
              <span className="input-group-text">🏠</span>
              <div className="form-floating">
                <select
                  className="form-select"
                  id="inmuebleSelect"
                  aria-label="Default select example"
                  name="SelectInm"
                  required
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
                >
                  {data2?.map((items, index) => {
                    return (
                      <option key={index} value={items._id}>
                        {items.Nombre_Servicio}
                      </option>
                    );
                  })}
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
                  ></textarea>
                  <label htmlFor="descripcionTextarea">Descripcion</label>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 text-end">
            <button type="submit">Crear</button>
          </div>
        </form>
      )}
    </>
  );
}
