import { useDispatch, useSelector } from "react-redux";
import { ApiPut, ApiPost } from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import {
  changeDataVoid,
  changeReload,
} from "../../../../features/modal/moda.slice";
import { CloseModal } from "../../../../assets/js/CloseModal";
import TypeDocumentInput from "./ItemsForm/TypeDocument";
const urlOwner = "/inmuebles/propietario";

export function FormOwner() {
  const [empty, setEmpty] = useState(true);
  const [tipoDocumento, setTypeDocument] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  let data = useSelector((state) => state.modal.data);

  const HandlePost = (e) => {
    e.preventDefault();

    const resultado = {
      documento: e.target.documento.value,
      nombre: e.target.nombre.value,
      correo: e.target.correo.value,
      telefono: e.target.telefono.value,
      direccion: e.target.direccion.value,
      tipoDocumento: tipoDocumento,
    };

    // dispatch(changeDataVoid());
    ApiPost(urlOwner, resultado, setErrorMsg)
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
      documento: e.target.documento.value,
      nombre: e.target.nombre.value,
      correo: e.target.correo.value,
      telefono: e.target.telefono.value,
      direccion: e.target.direccion.value,
      tipoDocumento: tipoDocumento,
    };
    ApiPut(urlOwner, resultado)
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

  return (
    <>
      <form className="row g-3" onSubmit={empty ? HandlePost : HandlePut}>
        <div className="col-md-6">
          <label htmlFor="inputDocument" className="form-label">
            Documento*
          </label>
          <div className="d-flex align-items-start">
            <TypeDocumentInput onDocumentChange={setTypeDocument} />
            <input
            id="documento"
              type="number"
              className="form-control"
          
              name="documento"
              defaultValue={empty ? "" : data.documento}
              min={80000000} max={1999999999} 
              required
              title="Ingrese el documento de identificación del propietario"
            />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">
            Nombre*
          </label>
          <input
            type="text"
            className="form-control"
    
            name="nombre"
            title="Ingrese el nombre completo del propietario"
            defaultValue={empty ? "" : data.nombre} 
            required
          />
        </div>

        {/* <div className="col-md-6">
          <label htmlFor="inputLastName" className="form-label">
            Apellidos
          </label>
          <input
            type="text"
            className="form-control"
            name="apellidos"
            placeholder="Ingrese sus apellidos"
            defaultValue={empty ? "" : data.apellidos}
          />
        </div> */}

        <div className="col-md-6">
          <label htmlFor="inputcorreo" className="form-label">
            Correo*
          </label>
          <input
            type="email"
            className="form-control"
            name="correo"
     
            title="Ingrese el correo del propietario"
            defaultValue={empty ? "" : data.correo}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputPhone" className="form-label">
            Teléfono*
          </label>
          <input
            type="tel"
            className="form-control"
            name="telefono"
     
            title="Ingrese el telefono del propietario"
            defaultValue={empty ? "" : data.telefono}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputAddress" className="form-label">
            Dirección*
          </label>
          <input
            type="text"
            className="form-control"
            name="direccion"

            title="Ingrese la dirección del encargado"
            defaultValue={empty ? "" : data.direccion}
            required
          />
        </div>
        {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
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
    </>
  );
}
