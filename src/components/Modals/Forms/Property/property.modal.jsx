import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { ApiPut, ApiGet2, ApiPost } from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import {
  changeDataVoid,
  changeReload,
} from "../../../../features/modal/moda.slice";
import { CloseModal } from "../../../../assets/js/CloseModal";
import TypeDocumentInput from "./ItemsForm/TypeDocument";
import { IconLoading } from "../../../../Utils/IconsLoading";
import { Tooltip } from "react-tooltip";

//pruebas
import { Button, Modal } from "react-bootstrap";
import { changeType } from "../../../../features/modal/address.slice";

const urlManager = "/inmuebles/encargado";
const urlOwner = "/inmuebles/propietario";
const urlInmueble = "/inmuebles/inmueble";

export function FormProperty() {
  const [empty, setEmpty] = useState(true);
  const dispatch = useDispatch();
  const [tipoDocumento, setTypeDocument] = useState("");
  const [mostrarCosa, setMostrarCosa] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [change, setChange] = useState("");
  let data = useSelector((state) => state.modal.data);
  let DirectionState = useSelector((state) => state.direction.direction);

  const [data1, data2, loading, error] = ApiGet2(urlOwner, urlManager);

  const HandlePost = (e) => {
    e.preventDefault();

    const resultado = {
      tipoPropiedad: e.target.tipoPropiedad.value,
      direccion: DirectionState,
      metrosCuadrados: e.target.metrosCuadrados.value,
      nHabitaciones: e.target.nHabitaciones.value,
      nBanos: e.target.nBanos.value,
      fechConstruccion: `${e.target.fechConstruccion.value}`,
      id_propietario: e.target.id_propietario.value,
      id_encargado: e.target.id_encargado.value,
      ///Arrendatario
    };
    if (mostrarCosa) {
      resultado.documento = e.target.documento.value;
      resultado.nombre = e.target.nombre.value;
      resultado.correo = e.target.correo.value;
      resultado.telefono = e.target.telefono.value;
      resultado.tipoDocumento = tipoDocumento;
    }
    ApiPost(urlInmueble, resultado, setErrorMsg)
      .then((res) => {
        if (res.error) {
          setErrorMsg(res.error);
        } else {
          dispatch(changeReload());
          CloseModal();
        }
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
      direccion: DirectionState,
      metrosCuadrados: e.target.metrosCuadrados.value,
      nHabitaciones: e.target.nHabitaciones.value,
      nBanos: e.target.nBanos.value,
      fechConstruccion: e.target.fechConstruccion.value,

      id_propietario: e.target.id_propietario.value,
      id_encargado: e.target.id_encargado.value,
      ///Arrendatario
    };
    if (mostrarCosa) {
      resultado.documento = e.target.documento.value;
      resultado.nombre = e.target.nombre.value;
      resultado.correo = e.target.correo.value;
      resultado.telefono = e.target.telefono.value;
      resultado.tipoDocumento = tipoDocumento;
    }
    ApiPut(urlInmueble, resultado)
      .then((res) => {
        res;
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
    ("effect");
    if (Object.keys(data).length != 0) {
      setEmpty(false);
    }
  }, [data]);

  const toggleCosa = () => {
    setMostrarCosa(!mostrarCosa);
  };
  const handleSelect = (e) => {
    setChange(e.target.value);
    dispatch(changeType(e.target.value));
  };
  const fechaActual = new Date().toISOString().split("T")[0];

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
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
            <label htmlFor="inputTipoPropiedad" className="form-label">
              Tipo Propiedad
            </label>
            <select
              style={{ borderColor: "#BDC3C7" }}
              id="inputTipoPropiedad"
              className="form-select"
              name="tipoPropiedad"
              defaultValue={empty ? "" : data.tipoPropiedad}
              onChange={handleSelect}
            >
              <option value="Casa">Casa</option>
              <option value="Apartamento">Apartamento</option>
              <option value="Local">Local</option>
              <option value="Bodega">Bodega</option>
            </select>
          </div>

          <div className="col-md-6 " id="direccion-form-modal">
            <label className="form-label">Dirección</label>

            <div className="col-md-6">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Dirección
              </button>
              <span style={{ fontWeight: "bold", paddingLeft: 10 }}>
                {empty ? DirectionState : data.direccion}
              </span>
            </div>
          </div>
          {/*
NOTA DE BRANDON, SOLO TIENES QUE DEFINIR que otras cosas debes controlar
*/}

          <>
            <div className="col-md-6">
              <label className="form-label">Metros Cuadrados</label>
              <input
                type="number"
                className="form-control"
                id="inputMetrosCuadrados"
                name="metrosCuadrados"
                min="0"
                defaultValue={empty ? "" : data.metrosCuadrados}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Numero Habitaciones</label>
              <input
                style={{ borderColor: "#BDC3C7" }}
                type="number"
                className="form-control"
                id="inputNumHabitacion"
                name="nHabitaciones"
                min="0"
                defaultValue={empty ? "" : data.nHabitaciones}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Numero de Baños</label>
              <input
                style={{ borderColor: "#BDC3C7" }}
                type="number"
                className="form-control"
                id="inputNumBanos"
                name="nBanos"
                min="0"
                defaultValue={empty ? "" : data.nBanos}
              />
            </div>
          </>

          <div className="col-md-6">
            <label className="form-label">Fecha Construcción</label>
            <input
              style={{ borderColor: "#BDC3C7" }}
              type="date"
              className="form-control"
              id="inputFechaConstruccion"
              placeholder="Ingrese la fecha de construcción del inmueble"
              name="fechConstruccion"
              max={fechaActual}
              defaultValue={empty ? "" : data.fechConstruccion}
            />
          </div>

          <SelectForForm
            data={data}
            data1={data1}
            data2={data2}
            empty={empty}
          />

          <div className="text-center">
            <input
              type="checkbox"
              className="btn-check"
              id="btn-check-outlined"
              autoComplete="off"
              onChange={toggleCosa}
            />
            <label
              className="btn btn-outline-primary"
              htmlFor="btn-check-outlined"
            >
              {empty ? "Agregar Arrendatario" : "Modificar Arrendatario"}
            </label>
          </div>

          {mostrarCosa && (
            <div>
              <h5 className="text-center">Arrendatario</h5>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="inputDocument" className="form-label">
                    Documento
                  </label>
                  <div className="d-flex align-items-start">
                    <TypeDocumentInput onDocumentChange={setTypeDocument} />
                    <input
                      style={{ borderColor: "#BDC3C7" }}
                      type="number"
                      className="form-control"
                      id="inputDocument"
                      name="documento"
                      defaultValue={empty ? "" : data.documento}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="inputName" className="form-label">
                    Nombre
                  </label>
                  <input
                    style={{ borderColor: "#BDC3C7" }}
                    type="text"
                    className="form-control"
                    id="inputName"
                    name="nombre"
                    defaultValue={empty ? "" : data.nombre}
                    title="Ingrese el nombre completo del arrendatario"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="inputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    style={{ borderColor: "#BDC3C7" }}
                    type="text"
                    className="form-control"
                    id="inputEmail"
                    name="correo"
                    defaultValue={empty ? "" : data.correo}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="inputPhone" className="form-label">
                    Teléfono
                  </label>
                  <input
                    style={{ borderColor: "#BDC3C7" }}
                    type="tel"
                    className="form-control"
                    id="inputPhone"
                    name="telefono"
                    defaultValue={empty ? "" : data.telefono}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="col-12 text-end">
            <button
              type="submit"
              className="btn btn-primary"
              title={empty ? "Botón para crear" : "Botón para actualizar"}
            >
              {empty ? "Crear" : "Actualizar"}
            </button>
          </div>
        </form>
      )}
    </>
  );
}
const OptionDefault = (data, api) => {
  const encontrado = api.find((item) => item._id === data);
  encontrado;
  if (encontrado == undefined || encontrado == null) {
    return { value: "Empty", label: "Seleccione Un Valor" };
  }
  return { value: encontrado._id, label: encontrado.nombre };
};
const SelectForForm = ({ data, data1, data2, empty }) => {
  return (
    <>
      <div className="col-md-6">
        <label className="form-label">Propietario</label>
        <Select
          id="inputPropietario"
          name="id_propietario"
          defaultValue={OptionDefault(data.id_propietario, data1)}
          options={data1?.map((item) => ({
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
          defaultValue={OptionDefault(data.id_encargado, data2)}
          options={data2?.map((item) => ({
            value: item._id,
            label: item.nombre,
          }))}
          required
         
        />
      </div>
    </>
  );
};
