import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { HandlePost, HandlePut } from "../../actions/handle.click";
import { CategoriaServicioResForm } from "../../actions/Constantes";

const url = import.meta.env.VITE_URL_CATEGORY;

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

  const TextInputLindo = (props, { name, title, empty, data }) => {
    return (
      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="inputNombreCategoria"
          name={name}
          title={title}
          defaultValue={{ empty } ? "" : { data }.nombreCategoria}
          placeholder="Ingresa el nombre de la categoria"
          required
        />
        <label htmlFor="floatingInput" className="form-label">
          Nombre de la Categoría *
        </label>
        <div className="invalid-feedback">La categoria necesita un nombre</div>
      </div>
    );
  };

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
                CategoriaServicioResForm(e, empty, data)
              )
            : HandlePut(
                e,
                setErrorMsg,
                dispatch,
                url,
                CategoriaServicioResForm(e, empty, data)
              )
        }
      >
        <div className="col-md-6">
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="inputNombreCategoria"
              name="NombreCategoria"
              title="Ingrese un nombre para la categoría"
              defaultValue={empty ? "" : data.nombreCategoria}
              placeholder=""
              required
            />
            <label htmlFor="floatingInput" className="form-label">
              Nombre de la Categoría *
            </label>
            <div className="invalid-feedback">
              La categoria necesita un nombre
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating mb-3">
            <textarea
              style={{ resize: "none", height: "100px" }}
              className="form-control"
              id="inputDescripcionCategoria"
              title="Ingrese una descripción para la categoría"
              name="DescripcionCategoria"
              placeholder="Ingresa una descripción para la categoria"
              defaultValue={empty ? "" : data.descripcion}
              required
            ></textarea>
            <label htmlFor="inputDescripcionCategoria" className="form-label">
              Descripción de la Categoría *
            </label>
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
