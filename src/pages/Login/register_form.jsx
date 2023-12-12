import { useDispatch, useSelector } from "react-redux";
import { ApiGet } from "../../hooks/useApi";
import { useEffect, useState } from "react";
import { IconLoading } from "../../Utils/IconsLoading";
import { validarDocumento } from "../../validations/documento";
import { validarTelefono } from "../../validations/telefono";
import axios from "../../libs/axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AlertErrorLog } from "../../assets/js/Alerts";
import { SaveUser } from "../../features/User/user_register.slice";

const url = "/usuarios/usuario/registro";
const urlCategoria = import.meta.env.VITE_URL_CATEGORY;

export const Register_form = () => {
  const [empty, setEmpty] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [documento, setDocumento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [errorTelefonoMsg, setErrorTelefonoMsg] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();
  token;
  const datas = useSelector((state) => state.modal.data);
  const userFromRedux = useSelector((state) => state.user_register);
  "🚩", userFromRedux;

  const [dataOfApi, loading, error] = ApiGet(urlCategoria);

  useEffect(() => {
    const confirmToken = async () => {
      try {
        const response = await axios.get(
          `/usuarios/usuario/confirmacion_correo/${token}`
        );
        dispatch(SaveUser(response.data.data));
      } catch (error) {
        error;
        AlertErrorLog("Error del token");
      }
    };
    ("tamos en 👀🎉");
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
    confirmToken();
  }, [datas, token]);
  loading;

  const documentoError = validarDocumento(documento);
  const telefonoError = validarTelefono(telefono);
  const animatedComponents = makeAnimated();

  const HandleSubmit = async (e) => {
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

    ("entro");
    try {
      const selectedCategorias = selectedCategories.map(
        (category) => category.value
      );
      "🐭", userFromRedux;
      const FormData = {
        documento: documento,
        nombre: e.target.name.value,
        telefono: e.target.telefono.value,
        email: userFromRedux.email,
        password: userFromRedux.password,
        direccion: e.target.direccion.value,
        categoriaServicio: selectedCategorias,
      };
      "🧿", FormData;
      const res = await axios.post(url, FormData);
      res;
      if (res.status === 200) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title:
            "Registro exitoso, ahora puedes iniciar sesión y revisar tu correo",
          showConfirmButton: true,
        });
        // alert("🤠Registro exitoso revisa tu correo");
        navigate("/login");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          setErrorMsg(error.response.data.message);
        } else {
          console.error("Error de respuesta:", error.response);
        }
      } else {
        console.error("Error:", error);
      }
    }
  };
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100 bg-light">
      <div
        className="card p-4 w-75 h-70"
        style={{
          backgroundColor: "#f8f9fa",
          boxShadow: "0 4px 8px rgba(0.8, 0, 0, 0.7)",
        }}
      >
        <h2 className="text-center mb-4">Perfil proveedor</h2>
        <div className="card-body ">
          <IconLoading isLoading={loading} />
          {error && (
            <div className="alert alert-danger mt-3" role="alert">
              {error.message}
            </div>
          )}

          {!loading && !error && (
            <form
              onSubmit={(e) => {
                HandleSubmit(e, userFromRedux);
              }}
            >
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating mb-3">
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
                    <label htmlFor="inputDocument" className="form-label">
                      Documento*
                    </label>
                    {errorMsg && (
                      <div className="invalid-feedback">{errorMsg}</div>
                    )}
                  </div>

                  <div className="mb-3 form-floating">
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
                    <label
                      htmlFor="inputNombreProveedor"
                      className="form-label"
                    >
                      Nombre*
                    </label>
                  </div>

                  <div className="mb-3 form-floating"></div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3 form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="inputDireccionProveedor"
                      placeholder="Ingrese su dirección"
                      name="direccion"
                      defaultValue={empty ? "" : datas.direccion}
                      required
                    />
                    <label
                      htmlFor="inputDireccionProveedor"
                      className="form-label"
                    >
                      Dirección*
                    </label>
                  </div>

                  <div className="mb-3 form-floating ">
                    {" "}
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
                    <label
                      htmlFor="inputTelefonoProveedor"
                      className="form-label"
                    >
                      Teléfono*
                    </label>
                    {errorTelefonoMsg && (
                      <div className="invalid-feedback">{errorTelefonoMsg}</div>
                    )}
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="mb-3 w-75 text-center">
                    <label
                      htmlFor="inputCategoryService"
                      className="form-label"
                    >
                      Categoría del Servicio
                    </label>
                    <Select
                      placeholder="Seleccionar"
                      noOptionsMessage={() => "No hay más opciones"}
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
              </div>
              {errorMsg && <div className="invalid-feedback">{errorMsg}</div>}

              <div className="col-12 text-end">
                <button type="submit" className="btn btn-primary">
                  {empty ? "Crear" : "Actualizar"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
