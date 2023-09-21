import { useDispatch, useSelector } from "react-redux";
import { ApiPut, ApiPost } from "../../../../hooks/useApi";
import { useEffect, useState } from "react";
import { changeDataVoid } from "../../../../features/modal/moda.slice";

const URLPropia = "https://rcservice.onrender.com/api/proveedores/proveedor";

export const ProvidersModal = () => {
  const [empty, setEmpty] = useState(true);
  const dispatch = useDispatch();

  let data = useSelector((state) => state.modal.data);

  const HandlePost = (e) => {
    e.preventDefault();

    const resultado = {
      Nombre: e.target.name.value,
      Apellido: e.target.lastname.value,
      Telefono: e.target.telefono.value,
      Email: e.target.EmailProvider.value,
      Direccion: e.target.AdressProvider.value,
    };
    console.log(resultado);
    ApiPost(URLPropia, resultado);
    dispatch(changeDataVoid());
  };

  const HandlePut = (e) => {
    e.preventDefault();

    const resultado = {
      id: data.id,
      Nombre: e.target.name.value,
      Apellido: e.target.lastname.value,
      Email: e.target.EmailProvider.value,
      Direccion: e.target.AdressProvider.value,
    };
    ApiPut(URLPropia, resultado);
    dispatch(changeDataVoid());
  };

  useEffect(() => {
    console.log("effect");
    if (Object.keys(data).length != 0) {
      setEmpty(false);
    }
  }, [data]);

  return (
    <>
      <form className="row g-3" onSubmit={empty ? HandlePost : HandlePut}>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="inputNombreProveedor" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="inputNombreProveedor"
              placeholder="Ingrese el nombre "
              name="name"
              defaultValue={empty ? "" : data.name}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputApellidoProveedor" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="inputApellidoProveedor"
              placeholder="Ingrese el apellido"
              name="lastname"
              defaultValue={empty ? "" : data.lastname}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputTelefonoProveedor" className="form-label">
              Telefono
            </label>
            <input
              type="text"
              className="form-control"
              id="inputTelefonoProveedor"
              placeholder="Ingrese el telefono"
              name="telefono"
              defaultValue={empty ? "" : data.phone}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputEmailProveedor" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="inputEmailProveedor"
              placeholder="Ingrese el email"
              name="EmailProvider"
              defaultValue={empty ? "" : data.Email}
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
              placeholder="Ingrese la dirección"
              name="AdressProvider"
              defaultValue={empty ? "" : data.Address}
            />
          </div>
        </div>

        <div className="col-12 text-end">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};
