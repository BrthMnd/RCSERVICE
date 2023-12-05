import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApiPost, ApiPut } from "../../../../hooks/useApi";
import {
  changeDataVoid,
  changeReload,
} from "../../../../features/modal/moda.slice";
import { CloseModal } from "../../../../assets/js/CloseModal";

export function ContratingStatus() {
  const data = useSelector((state) => state.modal.data);
  const url = useSelector((state) => state.modal.url);
  const dispatch = useDispatch();

  const [empty, setEmpty] = useState(true);
  const handlePost = (e) => {
    e.preventDefault();

    const resultado = {
      id: data.id,
      description: e.target.texArea.value,
      name: e.target.names.value,
    };
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
  const handlePut = (e) => {
    e.preventDefault();

    const resultado = {
      id: data.id,
      description: e.target.texArea.value,
      name: e.target.names.value,
    };
    ApiPut(url, resultado)
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
  useEffect(() => {
    if (Object.keys(data).length != 0) {
      setEmpty(false);
    }
  }, [data]);
  return (
    <form onSubmit={empty ? handlePost : handlePut}>
      <div className="mb-3">
        <label htmlFor="number" className="form-label">
          Nombre
        </label>
        <input
          type="number"
          className="form-control "
          id="number"
          name="number"
          placeholder="Ingresa tu nombre"
          defaultValue={empty ? "" : data.name}
        />
      </div>
      <div className="mb-1">
        <label htmlFor="nombre" className="form-label">
          Orden
        </label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          name="names"
          placeholder="Ingresa tu nombre"
          defaultValue={empty ? "" : data.name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descripcion" className="form-label">
          Descripción
        </label>
        <textarea
          className="form-control"
          id="descripcion"
          rows="3"
          name="texArea"
          placeholder="Ingresa una descripción"
          defaultValue={empty ? "" : data.description}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
}
