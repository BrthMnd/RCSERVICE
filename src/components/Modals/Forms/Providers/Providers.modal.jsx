import { useDispatch, useSelector } from "react-redux";
import { ApiGet } from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import { HandlePost, HandlePut } from "../../actions/handle.click";
import { ProveedorResForm } from "../../actions/Constantes";
import { IconLoading } from "../../../../Utils/IconsLoading";
const url = "/proveedores/proveedor";

const urlCategoria = import.meta.env.VITE_URL_CATEGORY;

export const ProvidersModal = () => {
  const [empty, setEmpty] = useState(true);
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState("");
  let datas = useSelector((state) => state.modal.data);

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
          onSubmit={(e) =>
            empty
              ? HandlePost(
                  e,
                  setErrorMsg,
                  dispatch,
                  url,
                  ProveedorResForm(e, empty, datas)
                )
              : HandlePut(
                  e,
                  setErrorMsg,
                  dispatch,
                  url,
                  ProveedorResForm(e, empty, datas)
                )
          }
        >
          {console.log("🏠", datas)}
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="inputDocument" className="form-label">
                Documento
              </label>
              <input
                type="text"
                className="form-control"
                id="inputDocument"
                title="Escriba su documento en este campo"
                placeholder="Ingrese su Documento"
                name="documento"
                defaultValue={empty ? "" : datas.documento}
                required
              />
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
                className="form-control"
                title="Ingrese su número de teléfono móvil"
                id="inputTelefonoProveedor"
                placeholder="Ingrese el teléfono"
                name="telefono"
                defaultValue={empty ? "" : datas.phone}
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="inputEmailProveedor" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmailProveedor"
                title="Escriba su correo o email en este campo"
                placeholder="Ingrese el email"
                name="EmailProvider"
                defaultValue={empty ? "" : datas.Email}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="inputDireccionProveedor" className="form-label">
                Dirección
              </label>
              <input
                type="text"
                className="form-control"
                id="inputDireccionProveedor"
                title="Escoja su dirección"
                placeholder="Ingrese la dirección"
                name="AdressProvider"
                defaultValue={empty ? "" : datas.Address}
                required
              />
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
            {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
          </div>

          <div className="col-12 text-end">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      )}
    </>
  );
};
