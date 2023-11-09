import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { ApiPut, ApiGet2, ApiPost } from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import {
  changeDataVoid,
  changeReload,
} from "../../../../features/modal/moda.slice";
import { CloseModal } from "../../../../assets/js/CloseModal";
import DireccionForm from "./ItemsForm/Address";
import TypeDocumentInput from "./ItemsForm/TypeDocument"
import {IconLoading} from "../../../../Utils/IconsLoading";
const urlManager = "https://rcservice.onrender.com/api/inmuebles/encargado";
const urlOwner = "https://rcservice.onrender.com/api/inmuebles/propietario";
const urlInmueble = "https://rcservice.onrender.com/api/inmuebles/inmueble";

export function FormProperty() {
  const [empty, setEmpty] = useState(true);
  const dispatch = useDispatch();
  const [direccion, setDireccion] = useState('');
  const [tipoDocumento, setTypeDocument] = useState('');
  const [mostrarCosa, setMostrarCosa] = useState(false);

  let data = useSelector((state) => state.modal.data);

  const [data1, data2, loading, error] = ApiGet2(urlOwner, urlManager);

  const HandlePost = (e) => {
    e.preventDefault();

    const resultado = {
      tipoPropiedad: e.target.tipoPropiedad.value,
      direccion: direccion,
      metrosCuadrados: e.target.metrosCuadrados.value,
      nHabitaciones: e.target.nHabitaciones.value,
      nBanos: e.target.nBanos.value,
      fechConstruccion: `${e.target.fechConstruccion.value}`,
      id_propietario: e.target.id_propietario.value,
      id_encargado: e.target.id_encargado.value,
      ///Arrendatario 
      documento: e.target.documento.value,
      nombre: e.target.nombre.value,
      correo: e.target.correo.value,
      telefono: e.target.telefono.value,
      tipoDocumento: tipoDocumento,
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
      direccion: direccion,
      // direccion: e.target.direccion.value,
      metrosCuadrados: e.target.metrosCuadrados.value,
      nHabitaciones: e.target.nHabitaciones.value,
      nBanos: e.target.nBanos.value,
      fechConstruccion: e.target.fechConstruccion.value,

      id_propietario: e.target.id_propietario.value,
      id_encargado: e.target.id_encargado.value,
      ///Arrendatario 
      documento: e.target.documento.value,
      nombre: e.target.nombre.value,
      correo: e.target.correo.value,
      telefono: e.target.telefono.value,
      tipoDocumento: tipoDocumento,
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

  // configuracion del ocultar cosas

  const toggleCosa = () => {
    setMostrarCosa(!mostrarCosa);
  };



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
            <DireccionForm onDireccionChange={setDireccion} /> 
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
              options={data1?.map((item) => ({
                value: item._id,
                label: item.nombre,
              }))}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Encargado</label>
            {console.log("Valor por defecto:", data2?.find((item) => item._id === data.id_encargado))}
            <Select
              id="inputEncargado"
              name="id_encargado"
              defaultValue={data2?.find(
                (item) => item._id === data.id_encargado
              )}
              options={data2?.map((item) => ({
                value: item._id,
                label: item.nombre,
              }))}
              required
            />
          </div>
                  




          <div className="text-center">
        <input
          type="checkbox"
          className="btn-check"
          id="btn-check-outlined"
          autoComplete="off"
          onChange={toggleCosa}
        />
        <label className="btn btn-outline-primary" htmlFor="btn-check-outlined">
        {empty ? "Agregar Arrendatario" : "Modificar Arrendatario"}
        </label>
      </div>

















      {mostrarCosa && (
        <div >
        <h5 className="text-center">Arrendatario</h5>
        <div className="row g-3">
          <div className="col-md-6">
          <label htmlFor="inputDocument" className="form-label">
            Documento
          </label>
          <div className="d-flex align-items-start">
          <TypeDocumentInput onDocumentChange={setTypeDocument} />  
          <input
            type="number"
            className="form-control"
            id="inputDocument"
            placeholder="Ingrese su Documento"
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
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Ingrese su nombre"
            name="nombre"
            defaultValue={empty ? "" : data.nombre} 
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="inputEmail"
            name="correo"
            placeholder="Ingrese su correo"
            defaultValue={empty ? "" : data.correo} 
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputPhone" className="form-label">
            Teléfono
          </label>
          <input
            type="tel"
            className="form-control"
            id="inputPhone"
            name="telefono"
            placeholder="Ingrese su teléfono"
            defaultValue={empty ? "" : data.telefono} 
          />
        </div>
        </div>
        </div>

      )}



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
