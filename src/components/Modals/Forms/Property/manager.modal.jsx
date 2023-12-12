// FormManager.js
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApiPut, ApiPost } from "../../../../hooks/useApi";
import {
  changeDataVoid,
  changeReload,
} from "../../../../features/modal/moda.slice";
import { CloseModal } from "../../../../assets/js/CloseModal";
import TypeDocumentInput from "./ItemsForm/TypeDocument";
import { Tooltip } from "react-tooltip";
import { propertyValidation } from '../../../../validations/validation.yup';

const urlManager = "/inmuebles/encargado";

export function FormManager() {
  const [empty, setEmpty] = useState(true);
  const [tipoDocumento, setTypeDocument] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState({});
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

    propertyValidation.validate(resultado, { abortEarly: false })
      .then(() => {
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
      })
      .catch((validationErrors) => {
        const errorObject = {};
        validationErrors.inner.forEach((error) => {
          errorObject[error.path] = error.message;
        });
        setErrors(errorObject);
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

    propertyValidation.validate(resultado, { abortEarly: false })
      .then(() => {
        ApiPut(urlManager, resultado)
          .then((res) => {
            if (res.status === 200) dispatch(changeReload());
            CloseModal();
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            dispatch(changeDataVoid());
          });
      })
      .catch((validationErrors) => {
        const errorObject = {};
        validationErrors.inner.forEach((error) => {
          errorObject[error.path] = error.message;
        });
        setErrors(errorObject);
      });
  };

  useEffect(() => {
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
              style={{ borderColor: '#BDC3C7', height: '55px' }}
              id="documento"
              type="number"
              className={`form-control ${errors.documento ? 'is-invalid' : ''}`}
              name="documento"
              defaultValue={empty ? '' : data.documento}
              title="Ingrese el documento de identificación del propietario"
              onKeyDown={(e) => {
                if (e.key === 'e' || e.key === 'E') {
                  e.preventDefault();
                }
              }}
            />
            {errors.documento && (
              <div className="invalid-feedback">{errors.documento}</div>
            )}
          </div>
        </div>

        <div className="form-floating mb-3">
          <input
            style={{ borderColor: '#BDC3C7' }}
            type="text"
            className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
            name="nombre"
            title="Ingrese el nombre completo del propietario"
            placeholder="Agregue un nombre"
            defaultValue={empty ? '' : data.nombre}
          />
          <label htmlFor="inputName" className="form-label">
            Nombre*
          </label>
          {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
        </div>
      </div>

      <div className="col-md-6">
        <div className="form-floating mb-3">
          <input
            style={{ borderColor: '#BDC3C7' }}
            type="email"
            className={`form-control ${errors.correo ? 'is-invalid' : ''}`}
            name="correo"
            title="Ingrese el correo del propietario"
            placeholder="agrega el correo por favor"
            defaultValue={empty ? '' : data.correo}
          />
          <label htmlFor="inputcorreo" className="form-label">
            Correo*
          </label>
          {errors.correo && <div className="invalid-feedback">{errors.correo}</div>}
        </div>

        <div className="form-floating mb-3">
          <input
            style={{ borderColor: '#BDC3C7' }}
            type="tel"
            className={`form-control ${errors.telefono ? 'is-invalid' : ''}`}
            name="telefono"
            title="Ingrese el telefono del propietario"
            placeholder="ingresa tu telefono"
            defaultValue={empty ? '' : data.telefono}
          />
          <label htmlFor="inputPhone" className="form-label">
            Teléfono*
          </label>
          {errors.telefono && (
            <div className="invalid-feedback">{errors.telefono}</div>
          )}
        </div>

        <div className="form-floating mb-3">
          <input
            style={{ borderColor: '#BDC3C7' }}
            type="text"
            className={`form-control ${errors.direccion ? 'is-invalid' : ''}`}
            name="direccion"
            title="Ingrese la dirección del encargado"
            placeholder=""
            defaultValue={empty ? '' : data.direccion}
          />
          <label htmlFor="inputAddress" className="form-label">
            Dirección*
          </label>
          {errors.direccion && (
            <div className="invalid-feedback">{errors.direccion}</div>
          )}
        </div>
      </div>

      {errorMsg && <div className="col-12 alert alert-danger">{errorMsg}</div>}

      <div className="col-12 text-end">
        <button
          type="submit"
          className="btn btn-primary"
          title={empty ? 'Botón para crear' : 'Botón para actualizar'}
        >
          {empty ? 'Crear' : 'Actualizar'}
        </button>
      </div>
    </form>
  </>
  );
}
