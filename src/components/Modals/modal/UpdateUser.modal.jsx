import { useDispatch, useSelector } from "react-redux";
import { Formik, useField } from "formik";
import {
  changeDataVoid,
  changeModalVoid,
} from "../../../features/modal/moda.slice";
import { UserUpdateValidation } from "../../../validations/validation.yup";
import { ApiGet, ApiPut } from "../../../hooks/useApi";
import Select from "react-select";
import { AlertError, AlertSuccess } from "../../../assets/js/Alerts";
import { useState } from "react";

const urlCategoria = import.meta.env.VITE_URL_CATEGORY;
const urlUsuario = import.meta.env.VITE_URL_USER;

export function ModalUserUpdate() {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("Hello...");
    dispatch(changeDataVoid());
    dispatch(changeModalVoid());
  };

  return (
    <div
      className="modal fade"
      id="ModalUpdateUser"
      tabIndex="-1"
      aria-labelledby="UpdateUser"
      aria-hidden="true"
    >
      <div className={`modal-dialog modal-dialog-centered `}>
        <div className="modal-content">
          <div className="modal-header align-items-center">
            <h5 className="modal-title text-center" id="UpdateUser">
              Actualizar Perfil
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleClick}
            ></button>
          </div>
          <div className="modal-body">
            <UserFormUpdate />
          </div>
        </div>
      </div>
    </div>
  );
}

function UserFormUpdate() {
  const [dataOfApi, loading, error] = ApiGet(urlCategoria);
  // console.log("😏", dataOfApi);
  const user = useSelector((state) => state.user);
  // console.log("🦥", user);
  const InitialValueUser = {
    documento: user.cc,
    telefono: user.phone,
    direction: user.direction,
    nombre: user.name,
    correo: user.email,
    direccion: user.direction,
    categorias: user.category || [],
  };
  const categorias = user.category?.map((categoryItem) => ({
    label: categoryItem.Nombre_Categoria,
    value: categoryItem._id,
  }));
  const [selectedCategories, setSelectedCategories] = useState(categorias);

  const FormikInputText = ({ name, type, props }) => {
    const [field, meta, helpers] = useField(name);

    return (
      <>
        <div className="form-group d-flex flex-column ">
          <input
            className="form-control "
            value={field.value}
            onChange={(e) => {
              helpers.setValue(e.target.value);
            }}
            {...type}
            {...props}
            required
          />
          {meta.error && (
            <div className="alert alert-danger" role="alert">
              <p>{meta.error}</p>
            </div>
          )}
        </div>
      </>
    );
  };

  const HandleUpdate = async (values) => {
    try {
      const selectedCategorias = selectedCategories?.map((item) => item.value);

      const updatedUser = await ApiPut(urlUsuario, {
        id: user.id,
        nombre: values.nombre,
        documento: values.documento,
        direccion: values.direccion,
        telefono: values.telefono,
        categoriaServicio: selectedCategorias,
      });
      if (updatedUser.status === 200) {
        AlertSuccess("Perfil actualizado");
        window.location.reload();
      } else {
        AlertError("Ocurrio un error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Formik
        initialValues={InitialValueUser}
        validationSchema={UserUpdateValidation}
        onSubmit={(values) => HandleUpdate(values)}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="col">
              <div className="mb-3">
                <label htmlFor="">Nombre*</label>
                <FormikInputText name="nombre" props={{ type: "text" }} />
                <label htmlFor="">Telefono*</label>
                <FormikInputText name="telefono" props={{ type: "number" }} />
                <label htmlFor="">Dirección</label>
                <FormikInputText name="direccion" props={{ type: "text" }} />

                {user.role === "Proveedores" && (
                  <>
                    <label htmlFor="">Categorias del servicio</label>
                    {dataOfApi && dataOfApi.length > 0 ? (
                      <Select
                        closeMenuOnSelect={false}
                        isMulti
                        defaultValue={categorias}
                        options={dataOfApi
                          .filter((apiData) => apiData.estado)
                          .map((apiData) => ({
                            label: apiData.Nombre_Categoria,
                            value: apiData._id,
                          }))}
                        onChange={(selectedOptions) => {
                          setSelectedCategories(selectedOptions);
                        }}
                      />
                    ) : (
                      <p>No hay categorias disponibles</p>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary">
                Actualizar
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
