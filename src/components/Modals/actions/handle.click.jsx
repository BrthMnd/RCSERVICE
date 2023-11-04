import { ApiPost, ApiPut } from "../../../hooks/useApi";
import {
  changeDataVoid,
  changeReload,
} from "../../../features/modal/moda.slice";
import { CloseModal } from "../../../assets/js/CloseModal";
import Swal from "sweetalert2";
export const HandlePost = (e, setErrorMsg, dispatch, url, FormData) => {
  e.preventDefault();
  console.log("🙌", FormData);
  ApiPost(url, FormData)
    .then((res) => {
      console.log(res.error);
      if (res.error) {
        setErrorMsg(res.error);
      } else {
        dispatch(changeReload());
        CloseModal();
      }
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      dispatch(changeDataVoid());
    });
};

export const HandlePut = (e, setErrorMsg, dispatch, url, FormData) => {
  e.preventDefault();
  console.log("🙌", FormData);
  ApiPut(url, FormData)
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        dispatch(changeReload());
        CloseModal();
      } else if (res.response.status === 400) {
        Swal.fire({
          icon: "warning",
          title: "No actualizado",
          text: "No se puede actualizar, la categoría está inactiva.",
        });
      }
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      dispatch(changeDataVoid());
    });
};
