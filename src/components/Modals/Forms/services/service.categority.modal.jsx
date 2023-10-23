import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { HandlePost, HandlePut } from "../../actions/handle.click";
import { CategoriaServicioResForm } from "../../actions/Constantes";

const url = import.meta.env.VITE_URL_CATEGORITY;

export function CategoriaServicioModal() {
  const [empty, setEmpty] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  let data = useSelector((state) => state.modal.data);

  useEffect(() => {
    console.log("effect");
    if (Object.keys(data).length !== 0) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  }, [data]);

  return (
    <>
      <form
        className="row g-3 needs-validation"
        onSubmit={(e) =>
          empty
            ? HandlePost(
                e,
                setErrorMsg,
                dispatch,
                url,
                empty,
                CategoriaServicioResForm(e, empty, data)
              )
            : HandlePut(
                e,
                setErrorMsg,
                dispatch,
                url,
                empty,
                CategoriaServicioResForm(e, empty, data)
              )
        }
      >
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="inputNombreCategoria" className="form-label">
              Nombre de la Categoría
            </label>
            <input
              type="text"
              className="form-control"
              id="inputNombreCategoria"
              name="NombreCategoria"
              defaultValue={empty ? "" : data.nombreCategoria}
              required
            />
            <div className="invalid-feedback">
              La categoria necesita un nombre
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="inputDescripcionCategoria" className="form-label">
              Descripción de la Categoría
            </label>
            <textarea
              className="form-control"
              id="inputDescripcionCategoria"
              rows="4"
              placeholder="Ingrese una descripción de la categoría"
              name="DescripcionCategoria"
              defaultValue={empty ? "" : data.descripcion}
              required
            ></textarea>
          </div>
        </div>
        {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}
