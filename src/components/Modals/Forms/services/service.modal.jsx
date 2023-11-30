import { useDispatch, useSelector } from "react-redux";
import { ApiGet } from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import { HandlePost, HandlePut } from "../../actions/handle.click";
import { ServicioResForm } from "../../actions/Constantes";
import { IconLoading } from "../../../../Utils/IconsLoading";

const urlCategoria = import.meta.env.VITE_URL_CATEGORY;
const url = import.meta.env.VITE_URL_SERVICE;

export const ServiceModal = () => {
  const [empty, setEmpty] = useState(true);
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState("");
  let datas = useSelector((state) => state.modal.data);

  const [data, loading, error] = ApiGet(urlCategoria);

  useEffect(() => {
    console.log("effect");
    if (Object.keys(datas).length !== 0) {
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
                  ServicioResForm(e, empty, datas)
                )
              : HandlePut(
                  e,
                  setErrorMsg,
                  dispatch,
                  url,
                  ServicioResForm(e, empty, datas)
                )
          }
        >
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="inputNameService" className="form-label">
                Nombre del Servicio *
              </label>
              <input
                type="text"
                className="form-control"
                title="Escriba su nombre en este campo"
                id="inputNameService"
                name="NombreServicio"
                defaultValue={empty ? "" : datas.nameService}
                placeholder="Ingrese el nombre del servicio"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="inputCategoryService" className="form-label">
                Categoría del Servicio *
              </label>
              <select
                title="Escoja una categoria"
                id="inputCategoryService"
                className="form-select"
                aria-label="Seleccione una categoría"
                name="CategoriaServicio"
                defaultValue={empty ? "" : datas.id_category}
                required
              >
                {data?.map((items, index) => {
                  if (items.estado) {
                    return (
                      <option key={index} value={items._id}>
                        {items.Nombre_Categoria}
                      </option>
                    );
                  }
                })}
              </select>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="inputDescriptionService" className="form-label">
                Descripción del Servicio *
              </label>
              <textarea
                className="form-control"
                title="Escriba una descripción para el servicio"
                id="inputDescriptionService"
                rows="4"
                name="DescripcionServicio"
                defaultValue={empty ? "" : datas.description}
                placeholder="Ingrese una descripción del servicio"
              ></textarea>
            </div>
          </div>
          {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
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
