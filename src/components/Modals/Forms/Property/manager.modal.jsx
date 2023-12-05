import { useDispatch, useSelector } from "react-redux";
import { ApiPut, ApiGet2, ApiPost } from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import {
  changeDataVoid,
  changeReload,
} from "../../../../features/modal/moda.slice";
import { CloseModal } from "../../../../assets/js/CloseModal";
import TypeDocumentInput from "./ItemsForm/TypeDocument";

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
    if (Object.keys(data).length !== 0) {
      setEmpty(false);
    }
  }, [data]);

  return (
    <>
      <form className="row g-3" onSubmit={empty ? HandlePost : HandlePut}>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="inputDocument" className="form-label">
              Documento*
            </label>
            <div className="d-flex align-items-start">
              <TypeDocumentInput onDocumentChange={setTypeDocument} />
              <input
                style={{ borderColor: "#BDC3C7", height: "55px" }}
                type="number"
                className="form-control"
                id="inputDocument"
                name="documento"
                defaultValue={empty ? "" : data.documento}
                min={80000000}
                max={1999999999}
                required
                title="Ingrese el documento de identificación del encargado"
                placeholder="Ingrese su número de documento"
                onKeyDown={(e) => {
                  if (e.key === "e" || e.key === "E") {
                    e.preventDefault();
                  }
                }}
              />
            </div>
          </div>
          <div className="form-floating mb-3">
            <input
              style={{ borderColor: "#BDC3C7" }}
              type="text"
              className="form-control"
              name="nombre"
              title="Ingrese el nombre completo del encargado"
              placeholder="Agregue un nombre"
              defaultValue={empty ? "" : data.nombre}
              required
            />
            <label htmlFor="inputName" className="form-label">
              Nombre*
            </label>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-floating mb-3">
            <input
              style={{ borderColor: "#BDC3C7" }}
              type="text"
              className="form-control"
              name="correo"
              title="Ingrese el correo del encargado"
              placeholder="Ingrese el correo"
              defaultValue={empty ? "" : data.correo}
              required
            />
            <label htmlFor="inputCorreo" className="form-label">
              Correo*
            </label>
          </div>

          <div className="form-floating mb-3">
            <input
              style={{ borderColor: "#BDC3C7" }}
              type="tel"
              className="form-control"
              name="telefono"
              title="Ingrese el teléfono del encargado"
              placeholder="Ingrese el teléfono"
              defaultValue={empty ? "" : data.telefono}
              required
            />
            <label htmlFor="inputPhone" className="form-label">
              Teléfono*
            </label>
          </div>

          <div className="form-floating mb-3">
            <input
              style={{ borderColor: "#BDC3C7" }}
              type="text"
              className="form-control"
              name="direccion"
              title="Ingrese la dirección del encargado"
              placeholder="Ingrese la dirección"
              defaultValue={empty ? "" : data.direccion}
              required
            />
            <label htmlFor="inputAddress" className="form-label">
              Dirección*
            </label>
          </div>
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
