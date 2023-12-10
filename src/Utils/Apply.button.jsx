/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { changeReload } from "../features/modal/moda.slice";
import { useEffect, useState } from "react";
import { ApiPut } from "../hooks/useApi";
import { Tooltip } from "react-tooltip";

export function ApplyButton({ table }) {
  const [isApplied, setIsApplied] = useState(false);
  const dispatch = useDispatch();
  const offers = useSelector((state) => state.offers);
  const user = useSelector((state) => state.user);
  const HandleClick = async () => {
    const url = !isApplied
      ? import.meta.env.VITE_URL_ADD_CANDIDATE
      : import.meta.env.VITE_URL_DELETE_CANDIDATE;
    let data = {
      id: table.id,
      id_ServiceProvider: user.id_provider,
    };
    const res = await ApiPut(url, data);

    dispatch(changeReload());
  };
  useEffect(() => {
    if (table) {
      offers.Category.forEach((Father) => {
        Father.id_ServiceProvider.forEach((child) => {
          // console.log("Father id offers: " + Father.id_offers._id);
          // console.log("table id : " + table.id);
          // console.log("child: " + child);
          // console.log("User: " + user.id_provider);
          if (
            Father.id_offers._id == table.id &&
            child._id == user.id_provider
          ) {
            ("se cumplio");
            setIsApplied(true);
          }
        });
      });
    }
  }, [isApplied]);
  return (
    <>
      <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Aplicar">
        <button
        data-tooltip-id="botonApply"
        data-tooltip-content="Aplicar"
          type="button"
          className={`btn ${isApplied ? "btn-danger" : "btn-success"}`}
          onClick={HandleClick}
        >
          {isApplied ? (
            <i className="far fa-times-circle"></i>
          ) : (
            <i className="far fa-check-circle"></i>
          )}
          {isApplied ? "Desaplicar" : "Aplicar"}
        </button>
        <Tooltip id="botonApply" place="bottom" opacity={0.3}></Tooltip>
      </span>
    </>
  );
}
