import { useDispatch, useSelector } from "react-redux";
import { ApiGet } from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import { HandlePost, HandlePut } from "../../actions/handle.click";
import { ProveedorResForm } from "../../actions/Constantes";
import { IconLoading } from "../../../../Utils/IconsLoading";
const url = "https://rcservice.onrender.com/api/proveedores/proveedor";

const urlCategoria = import.meta.env.VITE_URL_CATEGORY;

export const ProvidersModal = () => {
  const [empty, setEmpty] = useState(true);
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState("");
  const [documento, setDocumento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [errorTelefonoMsg, setErrorTelefonoMsg] = useState("");
  const [errorEmailMsg, setErrorEmailMsg] = useState("");
  let datas = useSelector((state) => state.modal.data);
  let DirectionState = useSelector((state) => state.direction.direction);

  const [data, loading, error] = ApiGet(urlCategoria);

  const providerCategories = datas?.id_category?.map(
    (category) => category._id
  );

  useEffect(() => {
    console.log("effect");
    if (Object.keys(datas).length != 0) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  }, [datas]);
  console.log(loading);

  const validarDocumento = (documento) => {
    const regexDocumento = /^[1-9]{1}\d{5,11}$/;
    return regexDocumento.test(documento);
  };

  const validarTelefono = (telefono) => {
    const regexTelefono = /^3\d{9}$/;
    return regexTelefono.test(telefono);
  };

  const validarEmail = (email) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  };

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

            if (!validarDocumento(documento)) {
              setErrorMsg("El documento ingresado es inválido");
              return;
            } else {
              setErrorMsg("");
            }

            if (!validarTelefono(telefono)) {
              setErrorTelefonoMsg("El teléfono ingresado es inválido");
              return;
            } else {
              setErrorTelefonoMsg("");
            }

            if (!validarEmail(email)) {
              setErrorEmailMsg("El correo electronico es inválido");
              return;
            } else {
              setErrorEmailMsg("");
            }
            empty
              ? HandlePost(
                  e,
                  setErrorMsg,
                  dispatch,
                  url,
                  ProveedorResForm(e, empty, datas, DirectionState)
                )
              : HandlePut(
                  e,
                  setErrorMsg,
                  dispatch,
                  url,
                  ProveedorResForm(e, empty, datas, DirectionState)
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
                required
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
                required
              />
              {errorTelefonoMsg && (
                <div className="invalid-feedback">{errorTelefonoMsg}</div>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="inputEmailProveedor" className="form-label">
                Email
              </label>
              <input
                type="text"
                className={`form-control ${errorEmailMsg ? "is-invalid" : ""}`}
                id="inputEmailProveedor"
                title="Escriba su correo o email en este campo"
                placeholder="Ingrese el email"
                name="EmailProvider"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                defaultValue={empty ? "" : datas.Email}
                required
              />
              {errorEmailMsg && (
                <div className="invalid-feedback">{errorEmailMsg}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="inputDireccionProveedor" className="form-label">
                Dirección
              </label>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Dirección
              </button>
              <p>{DirectionState}</p>
            </div>

            <div className="mb-3">
              <label htmlFor="inputCategoryService" className="form-label">
                Categoría del Servicio
              </label>
              {data?.map((apiData, index) => {
                if (apiData.estado) {
                  return (
                    <div key={index} className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={`categoryCheckbox${index}`}
                        name="CategoriaServicio"
                        value={apiData._id}
                        defaultChecked={
                          providerCategories &&
                          providerCategories.includes(apiData._id)
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`categoryCheckbox${index}`}
                      >
                        {apiData.Nombre_Categoria}
                      </label>
                    </div>
                  );
                }
              })}
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
