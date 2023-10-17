import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { ApiPut, ApiGet2, ApiPost } from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import {
  changeDataVoid,
  changeReload,
} from "../../../../features/modal/moda.slice";
import { CloseModal } from "../../../../assets/js/CloseModal";
const urlManager = "https://rcservice.onrender.com/api/inmuebles/encargado";
const urlOwner = "https://rcservice.onrender.com/api/inmuebles/propietario";
const urlInmueble = "https://rcservice.onrender.com/api/inmuebles/inmueble";

export function FormProperty() {
  const [empty, setEmpty] = useState(true);
  const dispatch = useDispatch();

  let data = useSelector((state) => state.modal.data);

  const [data1, data2, loading, error] = ApiGet2(urlOwner, urlManager);

  const HandlePost = (e) => {
    e.preventDefault();

    const resultado = {
      tipoPropiedad: e.target.tipoPropiedad.value,
      direccion: e.target.direccion.value,
      metrosCuadrados: e.target.metrosCuadrados.value,
      nHabitaciones: e.target.nHabitaciones.value,
      nBanos: e.target.nBanos.value,
      fechConstruccion: `${e.target.fechConstruccion.value}`,

      id_propietario: e.target.id_propietario.value,
      id_encargado: e.target.id_encargado.value,
    };

    ApiPost(urlInmueble, resultado)
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
      id: data.id,
      tipoPropiedad: e.target.tipoPropiedad.value,
      direccion: e.target.direccion.value,
      metrosCuadrados: e.target.metrosCuadrados.value,
      nHabitaciones: e.target.nHabitaciones.value,
      nBanos: e.target.nBanos.value,
      fechConstruccion: e.target.fechConstruccion.value,
      id_propietario: e.target.id_propietario.value,
      id_encargado: e.target.id_encargado.value,
    };
    ApiPut(urlInmueble, resultado)
      .then((res) => {
        console.log(res);
        if (res.status === 200) dispatch(changeReload());
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
    if (Object.keys(data).length != 0) {
      setEmpty(false);
    }
  }, [data]);

  // configuracion del select

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
              required
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
            <label className="form-label">Dirección</label>
            <input
              type="text"
              className="form-control"
              id="inputDireccion"
              placeholder="Ingrese su Dirección"
              name="direccion"
              defaultValue={empty ? "" : data.direccion}
              required
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
              min="0"
              defaultValue={empty ? "" : data.metrosCuadrados}
              required
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
              min="0"
              defaultValue={empty ? "" : data.nHabitaciones}
              required
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
              min="0"
              defaultValue={empty ? "" : data.nBanos}
              required
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
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Propietario</label>
            <Select
              id="inputPropietario"
              name="id_propietario"
              defaultValue={data1?.find(
                (item) => item._id === data.id_propietario
              )}
              options={data1?.map((item, index) => ({
                value: item._id,
                label: item.nombre,
              }))}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Encargado</label>
            <Select
              id="inputEncargado"
              name="id_encargado"
              defaultValue={data2?.find(
                (item) => item._id === data.id_encargado
              )}
              options={data2?.map((item, index) => ({
                value: item._id,
                label: item.nombre,
              }))}
              required
            />
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
