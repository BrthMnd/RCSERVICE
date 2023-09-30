import { useDispatch, useSelector } from "react-redux";
import { ApiPut, useApiGet2, useApiPost } from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import { changeDataVoid } from "../../../../features/modal/moda.slice";
const urlManager = "https://rcservice.onrender.com/api/inmuebles/encargado";
const urlOwner = "https://rcservice.onrender.com/api/inmuebles/propietario";
const urlInmueble = "https://rcservice.onrender.com/api/inmuebles/inmueble";

export function FormProperty() {
  const [empty, setEmpty] = useState(true);
  const dispatch = useDispatch();

  let data = useSelector((state) => state.modal.data);

  const [data1, data2, loading, error] = useApiGet2(urlOwner, urlManager);

  const HandlePost = (e) => {
    e.preventDefault();

    const resultado = {
      tipoPropiedad: e.target.tipoPropiedad.value,
      direccion: e.target.direccion.value,
      metrosCuadrados: e.target.metrosCuadrados.value,
      nHabitaciones: e.target.nHabitaciones.value,
      nBanos: e.target.nBanos.value,
      fechConstruccion: e.target.fechConstruccion.value,
      plano: e.target.plano.value,

      id_propietario: e.target.id_propietario.value,
      id_encargado: e.target.id_encargado.value,
    };

    useApiPost(urlInmueble, resultado);
    dispatch(changeDataVoid());
  };

  const HandlePut = (e) => {
    e.preventDefault();

    const resultado = {
      id: data.id,
      tipoPropiedad: e.target.tipoPropiedad.value,
      direccion: e.target.direccion.value,
      metrosCuadrados: e.target.metrosCuadrados.value,
      nHabitaciones: e.target.nHabitaciones.value,
      nBanos: e.target.nBanos.value,
      fechConstruccion: e.target.fechConstruccion.value,
      plano: e.target.plano.value,
      id_propietario: e.target.id_propietario.value,
      id_encargado: e.target.id_encargado.value,
    };
    ApiPut(urlInmueble, resultado);
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
            <label htmlFor="inputTipoPropiedad" className="form-label">
              Tipo Propiedad
            </label>
            <select
              id="inputTipoPropiedad"
              className="form-select"
              name="tipoPropiedad"
              defaultValue={empty ? "" : data.tipoPropiedad}
            >
              <option value="casa">Casa</option>
              <option value="apartamento">Apartamento</option>
              <option value="finca">Finca</option>
              <option value="lote">Lote</option>
              <option value="localComercial">Local Comercial</option>
              <option value="oficina">Oficina</option>
              <option value="bodega">Bodega</option>
              <option value="terreno">Terreno</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Direccion</label>
            <input
              type="text"
              className="form-control"
              id="inputDireccion"
              placeholder="Ingrese su Direccion"
              name="direccion"
              defaultValue={empty ? "" : data.direccion}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Metros Cuadrados</label>
            <input
              type="number"
              className="form-control"
              id="inputMetrosCuadrados"
              placeholder="Ingrese Metros Cuadrados"
              name="metrosCuadrados"
              defaultValue={empty ? "" : data.metrosCuadrados}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Numero Habitaciones</label>
            <input
              type="number"
              className="form-control"
              id="inputNumHabitacion"
              placeholder="Ingrese el numero de habitaciones"
              name="nHabitaciones"
              defaultValue={empty ? "" : data.nHabitaciones}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Numero de Baños</label>
            <input
              type="number"
              className="form-control"
              id="inputNumBanos"
              placeholder="Ingrese el numero de Baños"
              name="nBanos"
              defaultValue={empty ? "" : data.nBanos}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Fecha Construcción</label>
            <input
              type="date"
              className="form-control"
              id="inputFechaConstruccion"
              placeholder="Ingrese la fecha de construcción del inmueble"
              name="fechConstruccion"
              defaultValue={empty ? "" : data.fechConstruccion}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Planos</label>
            <input
              type="text"
              className="form-control"
              name="plano"
              defaultValue={empty ? "" : data.plano}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Propietario</label>
            <select
              id="inputPropietario"
              className="form-select"
              name="id_propietario"
              defaultValue={empty ? "" : data.id_propietario}
            >
              {data1?.map((items, index) => {
                return (
                  <option key={index} value={items._id}>
                    {items.documento}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Encargado</label>
            <select
              id="inputEncargado"
              className="form-select"
              name="id_encargado"
              defaultValue={empty ? "" : data.id_encargado}
            >
              {data2?.map((items, index) => {
                return (
                  <option key={index} value={items._id}>
                    {items.documento}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="col-12 text-end">
            <button type="submit" className="btn btn-primary">
              {empty ? "Crear" : "Actualizar"}
            </button>
          </div>
        </form>
      )}
    </>
  );
}
