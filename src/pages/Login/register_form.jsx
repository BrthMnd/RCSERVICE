import { useDispatch, useSelector } from "react-redux";
import { ApiGet } from "../../hooks/useApi";
import { useEffect, useState } from "react";
import { IconLoading } from "../../Utils/IconsLoading";
import { validarDocumento } from "../../Validaciones/documento";
import { validarTelefono } from "../../Validaciones/telefono";
import axios from "../../libs/axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";
const url = "/usuarios/usuario/registro";

const urlCategoria = import.meta.env.VITE_URL_CATEGORY;

export const Register_form = () => {
  const [empty, setEmpty] = useState(true);
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState("");
  const [documento, setDocumento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [errorTelefonoMsg, setErrorTelefonoMsg] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const datas = useSelector((state) => state.modal.data);
  const DirectionState = useSelector((state) => state.direction.direction);
  const userFromRedux = useSelector((state) => state.user_register);
  console.log("🚩", userFromRedux);

  const [dataOfApi, loading, error] = ApiGet(urlCategoria);

  useEffect(() => {
    console.log("effect");
    if (Object.keys(datas).length !== 0) {
      setEmpty(false);
      setDocumento(datas.documento || "");
      setTelefono(datas.phone || "");
      const data = datas.id_category.map((items) => {
        return {
          value: items._id,
          label: items.Nombre_Categoria,
        };
      });
      setSelectedCategories(data);
    } else {
      setEmpty(true);
    }
  }, [datas]);
  console.log(loading);

  const documentoError = validarDocumento(documento);
  const telefonoError = validarTelefono(telefono);
  const animatedComponents = makeAnimated();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log("entro");
    try {
      const selectedCategorias = selectedCategories.map(
        (category) => category.value
      );
      console.log("🐭", userFromRedux);
      const FormData = {
        documento: documento,
        nombre: e.target.name.value,
        telefono: e.target.telefono.value,
        email: userFromRedux.email,
        password: userFromRedux.password,
        direccion: "ASD",
        categoriaServicio: selectedCategorias,
      };
      console.log("🧿", FormData);
      const res = await axios.post(url, FormData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
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
          onSubmit={(e) => {
            e.preventDefault();

            if (documentoError) {
              setErrorMsg(documentoError);
              return;
            } else {
              setErrorMsg("");
            }

            if (telefonoError) {
              setErrorTelefonoMsg(telefonoError);
              return;
            } else {
              setErrorTelefonoMsg("");
            }
            HandleSubmit(e, userFromRedux);
          }}
        >
          {console.log("🏠", datas)}
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="inputDocument" className="form-label">
                Documento
              </label>
              <input  
                type="text"
                className={`form-control ${errorMsg ? "is-invalid" : ""}`}
                id="inputDocument"
                title="Escriba su documento en este campo"
                placeholder="Ingrese su Documento"
                name="documento"
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
              />
              {errorMsg && <div className="invalid-feedback">{errorMsg}</div>}
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
                className={`form-control ${
                  errorTelefonoMsg ? "is-invalid" : ""
                }`}
                title="Ingrese su número de teléfono móvil"
                id="inputTelefonoProveedor"
                placeholder="Ingrese el teléfono"
                name="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                defaultValue={empty ? "" : datas.phone}
              />
              {errorTelefonoMsg && (
                <div className="invalid-feedback">{errorTelefonoMsg}</div>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="inputDireccionProveedor" className="form-label">
                Dirección :
              </label>
              <button
                type="button"
                className="btn btn-primary mb-2"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Agregar Direccion
              </button>
              <p>
                <b style={{ color: "gray" }}>Tu direccion aparecera aquí: </b>
                {DirectionState}
              </p>
            </div>

            <div className="mb-3">
              <label htmlFor="inputCategoryService" className="form-label">
                Categoría del Servicio
              </label>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={dataOfApi
                  .filter((apiData) => apiData.estado)
                  .map((apiData) => ({
                    label: apiData.Nombre_Categoria,
                    value: apiData._id,
                  }))}
                defaultValue={selectedCategories}
                onChange={(selectedOptions) => {
                  setSelectedCategories(selectedOptions);
                }}
              />
            </div>
          </div>
          {errorMsg && <div className="invalid-feedback">{errorMsg}</div>}

          <div className="col-12 text-end">
            <button type="submit" className="btn btn-primary">
              {empty ? "Crear" : "Actualizar"}
            </button>
          </div>
        </form>
      )}
    </>
  );
};
