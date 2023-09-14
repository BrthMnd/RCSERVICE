import { useDispatch, useSelector } from "react-redux";
import { ApiPut, useApiPost } from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import { changeDataVoid } from "../../../../features/modal/moda.slice";

const url = "https://rcservice.onrender.com/api/proveedores/Categoria";

export function CategoriaServicioModal() {
  const [empty, setEmpty] = useState(true);
  const dispatch = useDispatch();

  let data = useSelector((state) => state.modal.data);

  const HandlePost = (e) => {
    e.preventDefault();

    const resultado = {
      Nombre_Categoria: e.target.NombreCategoria.value,
      Descripcion: e.target.DescripcionCategoria.value,
    };

    // dispatch(changeDataVoid());
    useApiPost(url, resultado);
    dispatch(changeDataVoid());
  };

  const HandlePut = (e) => {
    e.preventDefault();

    const resultado = {
      id: data.id,
      Nombre_Categoria: e.target.NombreCategoria.value,
      Descripcion: e.target.DescripcionCategoria.value,
    };
    ApiPut(url, resultado);
    dispatch(changeDataVoid());
  };
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
      <form className="row g-3" onSubmit={empty ? HandlePost : HandlePut}>
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
              defaultValue={empty ? "" : data.Nombre_Categoria}
            />
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
              defaultValue={empty ? "" : data.Descripcion}
            ></textarea>
          </div>
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}
