import { ApiPost, ApiPut } from "../../../hooks/useApi";
import {
  changeDataVoid,
  changeReload,
} from "../../../features/modal/moda.slice";
import { CloseModal } from "../../../assets/js/CloseModal";
import Swal from "sweetalert2";
import { ChangeDirectionVoid } from "../../../features/modal/address.slice";
import { EmployedValidation } from "../../../validations/validation.yup";
export const HandlePost = (e, setErrorMsg, dispatch, url, FormData) => {
  e.preventDefault();
  console.log("/////////// post");
  console.log(FormData);

  EmployedValidation.validate(FormData).then(res => console.log("todo bien")).catch(err => { console.log(err); setErrorMsg(err.errors) })


  ApiPost(url, FormData)
    .then((res) => {
      console.log(";alskdjalskdj", res);
      console.error("🤢", res);
      if (res.error) {
        setErrorMsg(res.error);
      } else {
        dispatch(changeReload());
        dispatch(changeDataVoid());
        dispatch(ChangeDirectionVoid());
        CloseModal();
      }
    })
    .catch((error) => {
      console.log("🤢🤢🤔or:", error);
      console.error(error);
    });
};

export const HandlePut = (e, setErrorMsg, dispatch, url, FormData) => {
  e.preventDefault();
  console.log("/////////// put");
  ApiPut(url, FormData)
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        dispatch(changeDataVoid());
        dispatch(changeReload());
        CloseModal();
      } else if (res.response.status === 400) {
        Swal.fire({
          icon: "warning",
          title: "No actualizado",
          text: "No se puede actualizar, la categoría está inactiva.",
        });
      } else if (res.response && res.response.status === 409) {
        setErrorMsg(res.response.data.error);
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
