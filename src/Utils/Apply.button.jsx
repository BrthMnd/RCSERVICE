/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import {
  changeData,
  changeModal,
  changeReload,
  changeUrl,
} from "../features/modal/moda.slice";
import { ApiPut } from "../hooks/useApi";
import { useState } from "react";
export function ApplyButton({ title, URL, table }) {
  const [isApplied, setIsApplied] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const HandleClick = async () => {
    console.log(table);
    const url = import.meta.env.VITE_URL_ADD_CANDIDATE;
    console.log(url);
    let data = {
      id: table.id,
      id_ServiceProvider: user.id,
    };
    const res = await ApiPut(url, data);
    console.log(res);
    dispatch(changeReload());
  };
  return (
    <>
      <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Aplicar">
        <button
          type="button"
          className={`btn ${isApplied ? "btn-danger" : "btn-success"}`}
          onClick={HandleClick}
        >
          <i class="far fa-check-circle"></i>
          {isApplied ? "Desaplicar" : "Aplicar"}
        </button>
      </span>
    </>
  );
}
