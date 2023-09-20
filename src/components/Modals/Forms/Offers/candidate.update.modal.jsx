import { useSelector } from "react-redux";
// import { ApiPut } from "../../../../hooks/useApi";
import { ApiGet3 } from "../../../../hooks/customApiHooks";
import { useEffect, useState } from "react";
import { ApiPut } from "../../../../hooks/useApi";
// import { changeDataVoid } from "../../../../features/modal/moda.slice";
const urlOfertas = "https://rcservice.onrender.com/api/ofertas/oferta";
const urlEstadoDeContrato =
  "https://rcservice.onrender.com/api/ofertas/estadoDeContrato";
const urlProveedor = "https://rcservice.onrender.com/api/proveedores/proveedor";

export function CandidateEdit() {
  const URLPropia = useSelector((state) => state.modal.url);
  let data = useSelector((state) => state.modal.data);
  const [empty, setEmpty] = useState(true);
  //   const dispatch = useDispatch();

  const [response1, response2, response3, loading, error] = ApiGet3(
    urlOfertas,
    urlEstadoDeContrato,
    urlProveedor
  );
  const HandlePut = (e) => {
    e.preventDefault();

    const resultado = {
      id: data.id,
      id_offers: e.target.selectOffers.value,
      id_ServiceProvider: e.target.selectProvider.value,
      id_ContratingStatus: e.target.SelectState.value,
    };
    console.log(resultado);
    ApiPut(URLPropia, resultado);
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
        <form className="row g-3 mx-auto" onSubmit={HandlePut}>
          <div className="col-md-6">
            <div className="input-group has-validation">
              <span className="input-group-text">🛒</span>
              <div className="form-floating">
                <select
                  className="form-select"
                  id="OfertaSelect"
                  aria-label="Default select example"
                  name="selectOffers"
                  defaultValue={empty ? "" : data.id_offers}
                >
                  {response1?.map((items, index) => {
                    return (
                      <option key={index} value={items._id}>
                        {items.description}
                      </option>
                    );
                  })}
                </select>
                <label htmlFor="OfertaSelect">Inmueble</label>
              </div>
            </div>

            <div className="input-group has-validation mt-3">
              <span className="input-group-text">🛠</span>
              <div className="form-floating">
                <select
                  className="form-select"
                  id="servicioSelect"
                  aria-label="Default select example"
                  required
                  name="selectProvider"
                  defaultValue={empty ? "" : data.id_ServiceProvider}
                >
                  {response3?.map((items, index) => {
                    let nombres = items.Nombre + " " + items.Apellido;
                    return (
                      <option key={index} value={items._id}>
                        {nombres}
                      </option>
                    );
                  })}
                </select>
                <label htmlFor="servicioSelect">
                  Proveedor de servicio aplicando
                </label>
              </div>
            </div>
            <div className="input-group has-validation mt-3">
              <span className="input-group-text">✏</span>
              <div className="form-floating">
                <select
                  className="form-select"
                  id="estadoSelect"
                  aria-label="Default select example"
                  required
                  name="SelectState"
                  defaultValue={empty ? "" : data.id_ContratingStatus}
                >
                  {response2?.map((items, index) => {
                    return (
                      <option key={index} value={items._id}>
                        {items.name}
                      </option>
                    );
                  })}
                </select>
                <label htmlFor="estadoSelect">Estado</label>
              </div>
            </div>
          </div>

          <div className="col-md-12 text-end">
            <button type="submit" className="btn btn-primary">
              {empty ? "" : "Actualizar"}
            </button>
          </div>
        </form>
      )}
    </>
  );
}
