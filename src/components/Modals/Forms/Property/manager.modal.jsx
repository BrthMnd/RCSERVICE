import { useDispatch, useSelector } from "react-redux";
import { ApiPut, ApiGet2, ApiPost } from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import {
  changeDataVoid,
  changeReload,
} from "../../../../features/modal/moda.slice";
import { CloseModal } from "../../../../assets/js/CloseModal";
import TypeDocumentInput from "./ItemsForm/TypeDocument";
import { Tooltip } from "react-tooltip";

const urlManager = "/inmuebles/encargado";

export function FormManager() {
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

    ApiPost(urlManager, resultado, setErrorMsg)
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
    ApiPut(urlManager, resultado)
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
    if (Object.keys(data).length !== 0) {
      setEmpty(false);
    }
  }, [data]);

  // pruebas

  return (
    <>
      <form className="row g-3" onSubmit={empty ? HandlePost : HandlePut}>
        <div className="col-md-6 ">
          <label htmlFor="inputDocument" className="form-label">
            Documento*
          </label>

          <div className="d-flex align-items-start">
            <TypeDocumentInput onDocumentChange={setTypeDocument} />
            <input
              type="number"
              className="form-control"
              data-tooltip-id="inputDocument"
              name="documento"
              defaultValue={empty ? "" : data.documento}
              data-tooltip-content="Ingrese el documento de identificación del encargado"
              required
            />
            <Tooltip id="inputDocument"></Tooltip>
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
            defaultValue={empty ? "" : data.nombre}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputEmail" className="form-label">
            Correo*
          </label>
          <input
            type="text"
            className="form-control"
            name="correo"
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
            defaultValue={empty ? "" : data.direccion}
            required
          />
          <Tooltip id="inputAddress"></Tooltip>
        </div>
        {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
        <div className="col-12 text-end">
          <button
            data-tooltip-id="inputCreate"
            type="submit"
            className="btn btn-primary"
            data-tooltip-content={
              empty ? "Botón para crear" : "Botón para actualizar"
            }
          >
            {empty ? "Crear" : "Actualizar"}
          </button>
          <Tooltip id="inputCreate"></Tooltip>
        </div>
      </form>
    </>
  );
}
