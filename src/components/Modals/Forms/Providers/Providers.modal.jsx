import { ApiGet } from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import { HandlePost, HandlePut } from "../../actions/handle.click";
import { ProveedorResForm } from "../../actions/Constantes";
import { IconLoading } from "../../../../Utils/IconsLoading";
import { validarDocumento } from "../../../../Validaciones/documento";
import { validarTelefono } from "../../../../Validaciones/telefono";
import { validarEmail } from "../../../../Validaciones/email";
import Select from "react-select";
import makeAnimated from "react-select/animated";
const url = "/proveedores/proveedor";

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
  const [selectedCategories, setSelectedCategories] = useState([]);
  const datas = useSelector((state) => state.modal.data);
  const DirectionState = useSelector((state) => state.direction.direction);

  const [data, loading, error] = ApiGet(urlCategoria);

  const providerCategories = datas?.id_category?.map(
    (category) => category._id
  );

  useEffect(() => {
    console.log("effect");
    if (Object.keys(datas).length !== 0) {
      setEmpty(false);
      setDocumento(datas.documento || "");
      setTelefono(datas.phone || "");
      setEmail(datas.Email || "");
    } else {
      setEmpty(true);
    }
  }, [datas]);
  console.log(loading);

  const documentoError = validarDocumento(documento);
  const telefonoError = validarTelefono(telefono);
  const emailError = validarEmail(email);

  const categoryOptions = data
    .filter((apiData) => apiData.estado)
    .map((apiData) => ({
      label: apiData.Nombre_Categoria,
      value: apiData._id,
    }));

  const selectedCategoriesFromData = data
    .filter(
      (apiData) => apiData.estado && providerCategories?.includes(apiData._id)
    )
    .map((apiData) => ({
      label: apiData.Nombre_Categoria,
      value: apiData._id,
    }));

  console.log("🎄", selectedCategoriesFromData);
  const animatedComponents = makeAnimated();

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
                  url,
                  ProveedorResForm(
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
                  url,
                  ProveedorResForm(
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
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={categoryOptions}
                value={selectedCategories}
                onChange={(selectedOptions) => {
                  setSelectedCategories(selectedOptions);
                }}
                defaultValue={selectedCategoriesFromData}
              />
              {console.log(selectedCategoriesFromData)}
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
