import { ApiGet } from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import { HandlePost, HandlePut } from "../../actions/handle.click";
import { EmployedResForm } from "../../actions/Constantes";
import { IconLoading } from "../../../../Utils/IconsLoading";
import { validarDocumento } from "../../../../validations/documento";
import { validarTelefono } from "../../../../validations/telefono";
import { useDispatch, useSelector } from "react-redux";
import { validarEmail } from "../../../../validations/email";
const url_employed = import.meta.env.VITE_URL_USER;

const urlCategoria = import.meta.env.VITE_URL_CATEGORY;

export const Employed_Modal = () => {
  const [empty, setEmpty] = useState(true);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [errorEmailMsg, setErrorEmailMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [documento, setDocumento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [errorTelefonoMsg, setErrorTelefonoMsg] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const datas = useSelector((state) => state.modal.data);
  const DirectionState = useSelector((state) => state.direction.direction);

  const [dataOfApi, loading, error] = ApiGet(urlCategoria);

  useEffect(() => {
    console.log("effect");
    if (Object.keys(datas).length !== 0) {
      setEmpty(false);
      setDocumento(datas.documento || "");
      setTelefono(datas.phone || "");
      // const data = datas.id_category.map((items) => {
      //   return {
      //     value: items._id,
      //     label: items.Nombre_Categoria,
      //   };
      // });
      // setSelectedCategories(data);
    } else {
      setEmpty(true);
    }
  }, [datas]);

  const documentoError = validarDocumento(documento);
  const telefonoError = validarTelefono(telefono);
  const emailError = validarEmail(email);

  return (
    <>
      <div>
        <IconLoading isLoading={loading} />
      </div>
      {error && (
        <div>
          <p>{error.message}</p>
        </div>
      )}

      {!loading && !error && (
        <form
          className="row g-3"
          onSubmit={(e) => {
            e.preventDefault();

            if (documentoError) {
              setErrorMsg(documentoError);
              return;
            } else {
              setErrorMsg("");
            }

            if (telefonoError) {
              setErrorTelefonoMsg(telefonoError);
              return;
            } else {
              setErrorTelefonoMsg("");
            }

            if (emailError) {
              setErrorEmailMsg(emailError);
              return;
            } else {
              setErrorEmailMsg("");
            }
            empty
              ? HandlePost(
                  e,
                  setErrorMsg,
                  dispatch,
                  url_employed,
                  EmployedResForm(
                    e,
                    empty,
                    datas,
                    DirectionState,
                    selectedCategories
                  )
                )
              : HandlePut(
                  e,
                  setErrorMsg,
                  dispatch,
                  url_employed,
                  EmployedResForm(
                    e,
                    empty,
                    datas,
                    DirectionState,
                    selectedCategories
                  )
                );
          }}
        >
          {console.log("🏠", datas)}
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="inputDocument" className="form-label">
                Documento
              </label>
              <input
                type="text"
                className={`form-control ${errorMsg ? "is-invalid" : ""}`}
                id="inputDocument"
                title="Escriba su documento en este campo"
                placeholder="Ingrese su Documento"
                name="documento"
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
              />
              {errorMsg && <div className="invalid-feedback">{errorMsg}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="inputNombreProveedor" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="inputNombreProveedor"
                title="Escriba su nombre en este campo"
                placeholder="Ingrese el nombre"
                name="name"
                defaultValue={empty ? "" : datas.name}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="inputTelefonoProveedor" className="form-label">
                Teléfono
              </label>
              <input
                type="text"
                className={`form-control ${
                  errorTelefonoMsg ? "is-invalid" : ""
                }`}
                title="Ingrese su número de teléfono móvil"
                id="inputTelefonoProveedor"
                placeholder="Ingrese el teléfono"
                name="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                defaultValue={empty ? "" : datas.phone}
              />
              {errorTelefonoMsg && (
                <div className="invalid-feedback">{errorTelefonoMsg}</div>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <div className="d-flex justify-content-around align-items-center">
                <label htmlFor="inputDireccionProveedor" className="form-label">
                  Dirección :
                </label>
                <button
                  type="button"
                  className="btn btn-primary mb-2"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                >
                  Agregar Direccion
                </button>
              </div>
              <p>
                <b style={{ color: "gray" }}>Tu direccion aparecera aquí: </b>
                {DirectionState}
              </p>
            </div>
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">
                E-mail
              </label>
              <input
                type="text"
                className={`form-control ${errorEmailMsg ? "is-invalid" : ""}`}
                id="inputEmail"
                title="E-mail"
                placeholder="Ingrese el e-mail"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                defaultValue={empty ? "" : datas.name}
              />
              {errorEmailMsg && (
                <div className="invalid-feedback">{errorEmailMsg}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                title="Contraseña"
                placeholder="Ingrese el contraseña"
                name="password"
                defaultValue={empty ? "" : datas.name}
                required
              />
            </div>
          </div>
          {errorMsg && <div className="invalid-feedback">{errorMsg}</div>}

          <div className="col-12 text-end">
            <button type="submit" className="btn btn-primary">
              {empty ? "Crear" : "Actualizar"}
            </button>
          </div>
        </form>
      )}
    </>
  );
};
