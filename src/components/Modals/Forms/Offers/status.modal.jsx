import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApiPut, useApiPost } from "../../../../hooks/useApi";
import { changeDataVoid } from "../../../../features/modal/moda.slice";

export function StatusModal() {
  const data = useSelector((state) => state.modal.data);
  const url = useSelector((state) => state.modal.url);
  const dispatch = useDispatch();

  const [empty, setEmpty] = useState(true);
  const HandlePost = (e) => {
    e.preventDefault();

    const resultado = {
      description: e.target.texArea.value,
      name: e.target.names.value,
    };
    // dispatch(changeDataVoid());
    useApiPost(url, resultado);
    dispatch(changeDataVoid());
  };
  const HandlePut = (e) => {
    e.preventDefault();

    const resultado = {
      id: data.id,
      description: e.target.texArea.value,
      name: e.target.names.value,
    };
    ApiPut(url, resultado);
    dispatch(changeDataVoid());
  };
  useEffect(() => {
    console.log("effect");
    if (Object.keys(data).length != 0) {
      setEmpty(false);
    }
  }, [data]);
  return (
    <form onSubmit={empty ? HandlePost : HandlePut}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          name="names"
          placeholder="Ingresa tu nombre"
          value={empty ? "" : data.name}
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
          value={empty ? "" : data.description}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
}
