import { useDispatch, useSelector } from "react-redux";
import { ApiPut, ApiPost } from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import { CloseModal } from "../../../../assets/js/CloseModal";
import {
  changeDataVoid,
  changeReload,
} from "../../../../features/modal/moda.slice";

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
    ApiPost(url, resultado)
      .then((res) => {
        console.log(res);
        dispatch(changeReload());
        CloseModal();
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        dispatch(changeDataVoid());
      });
  };

  const HandlePut = (e) => {
    e.preventDefault();

    const resultado = {
      id: data.id,
      Nombre_Categoria: e.target.NombreCategoria.value,
      Descripcion: e.target.DescripcionCategoria.value,
    };
    ApiPut(url, resultado)
      .then((res) => {
        console.log(res);
        if (res.status === 200) dispatch(changeReload());
        CloseModal();
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        dispatch(changeDataVoid());
      });
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
      <form
        className="row g-3 needs-validation"
        // noValidate
        onSubmit={empty ? HandlePost : HandlePut}
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
            <div className="invalid-feedback">
              La categoria necesita una descripción
            </div>
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
