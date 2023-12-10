import { useDispatch, useSelector } from "react-redux";
import { ApiGet } from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import { HandlePost, HandlePut } from "../../actions/handle.click";
import { ServicioResForm } from "../../actions/Constantes";
import { IconLoading } from "../../../../Utils/IconsLoading";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const urlCategoria = import.meta.env.VITE_URL_CATEGORY;
const url = import.meta.env.VITE_URL_SERVICE;

export const ServiceModal = () => {
  const [empty, setEmpty] = useState(true);
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState("");
  let datas = useSelector((state) => state.modal.data);
  console.log("🚀 ~ file: service.modal.jsx:18 ~ ServiceModal ~ datas:", datas);

  const [data, loading, error] = ApiGet(urlCategoria);

  useEffect(() => {
    if (Object.keys(datas).length !== 0) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  }, [datas]);
  const animatedComponents = makeAnimated();
  console.log(
    "🚀 ~ file: service.modal.jsx:30 ~ ServiceModal ~ animatedComponents: HOLA"
  );

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
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                title="Escriba el nombre del servicio en este campo"
                id="inputNameService"
                name="NombreServicio"
                defaultValue={empty ? "" : datas.nameService}
                placeholder="Ingrese el nombre del servicio"
                required
              />
              <label htmlFor="floatingInput" className="form-label">
                Nombre del Servicio *
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="inputCategoryService" className="form-label">
                Categoría del Servicio *
              </label>
              <Select
                components={animatedComponents}
                id="inputCategoryService"
                aria-label="Seleccione una categoría"
                name="CategoriaServicio"
                options={data
                  .map((items) => {
                    if (items.estado) {
                      return {
                        value: items._id,
                        label: items.Nombre_Categoria,
                      };
                    }
                    return null;
                  })
                  .filter(Boolean)}
                defaultValue={
                  empty
                    ? null
                    : {
                        value: datas.id_category,
                        label: datas.nameCategority,
                      }
                }
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-floating mb-3">
              <textarea
                style={{ resize: "none", height: "145px" }}
                className="form-control"
                title="Escriba una descripción para el servicio"
                id="inputDescriptionService"
                rows="4"
                name="DescripcionServicio"
                placeholder="Ingresa una descripción para el servicio"
                defaultValue={empty ? "" : datas.description}
              ></textarea>
              <label htmlFor="inputDescriptionService" className="form-label">
                Descripción del Servicio *
              </label>
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
