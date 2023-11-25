import { useDispatch, useSelector } from "react-redux";
import { Formik, useField } from "formik";
import {
  changeDataVoid,
  changeModalVoid,
} from "../../../features/modal/moda.slice";
import { UserUpdateValidation } from "../../../Validaciones/validation.yup";

export function ModalUserUpdate({}) {
  const dispatch = useDispatch();
  const handleClick = () => {
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
          <div className="modal-header">
            <h5 className="modal-title" id="UpdateUser">
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
  const user = useSelector((state) => state.user);
  const InitialValueUser = {
    documento: user.cc,
    telefono: user.phone,
    direction: user.direction,
  };
  const FormikInputText = ({ name, type, props }) => {
    const [field, meta, helpers] = useField(name);
    console.log(meta.error);

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
  const HandlePost = (values) => {
    console.log(values);
  };
  return (
    <>
      <Formik
        initialValues={InitialValueUser}
        validationSchema={UserUpdateValidation}
        onSubmit={(values) => HandlePost(values)}
      >
        {({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <FormikInputText name="usuario" />
              <FormikInputText name="documento" props={{ type: "number" }} />
              <FormikInputText name="telefono" props={{ type: "number" }} />
              <button>Submit</button>
            </form>
          );
        }}
      </Formik>
    </>
  );
}
