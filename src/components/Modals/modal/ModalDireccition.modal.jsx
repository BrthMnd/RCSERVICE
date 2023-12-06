/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeDirection } from "../../../features/modal/address.slice";

export function ModalDirection({ direction }) {
  const TypeOfProperty = useSelector((state) => state.direction.type);
  const dataDefault = useSelector((state) => state.modal.data.direccion);
  const [datArray, setDatArray] = useState(null);
  console.log(
    "🚀 ~ file: ModalDireccition.modal.jsx:10 ~ ModalDirection ~ datArray:",
    datArray
  );
  useEffect(() => {
    if (dataDefault) {
      setDatArray(dataDefault.split(" "));
    }
  }, [dataDefault]);
  const dispatch = useDispatch();
  

  let ob = {
    select_1: "",
    numeroA: "",
    select_2: "",
    numeroB: "",
    select_3: "",
    numeroC: "",
  };
  const [formAddress, setFormAddress] = useState(ob);
  console.log(
    "🚀 ~ file: ModalDireccition.modal.jsx:27 ~ ModalDirection ~ formAddress:",
    formAddress
  );
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormAddress((prevFormAddress) => ({
      ...prevFormAddress,
      [name]: value,
    }));
  };
  useEffect(() => {
    if (datArray) {
      setFormAddress({
        select_1: datArray[0] || "",
        numeroA: "",
        select_2: "",
        numeroB: "",
        select_3: "",
        numeroC: "",
      });
    }
  }, [datArray]);
  useEffect(() => {
    const directionStructure = `${formAddress.select_1} ${formAddress.numeroA} ${formAddress.select_2} # ${formAddress.numeroB} ${formAddress.select_3} - ${formAddress.numeroC}`;
    dispatch(ChangeDirection(directionStructure));
  }, [formAddress, dispatch]);
  return (
    <div
      className="modal fade"
      id="exampleModalToggle2"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
      tabIndex="-2"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
              Dirección
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onChange={HandleChange}>
              <div className="row g-3">
                <div className="col-md-2">
                  <label htmlFor="" style={{ fontSize: 13 }}>
                    Tipo de vía
                  </label>
                  <select
                    className="form-select"
                    name="select_1"
                    value={formAddress.select_1}
                  >
                    <option value=""></option>
                    <option value="CL" title="Calle">
                      CL
                    </option>
                    <option value="CR" title="Carrera">
                      CR
                    </option>
                    <option value="CQ" title="Circular">
                      CQ
                    </option>
                    <option value="DG" title="Diagonal ">
                      DG
                    </option>
                    <option value="TV" title="Transversal">
                      TV
                    </option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label htmlFor="" style={{ fontSize: 13 }}>
                    Número de vía principal
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Número"
                    name="numeroA"
                    title="Ingrese número de vía principal"
                    value={formAddress.numeroA}
                  />
                </div>
                <div className="col-md-2">
                  <label style={{ fontSize: 13 }}>Letra de vía principal</label>
                  <select
                    className="form-select"
                    name="select_2"
                    value={formAddress.select_2}
                  >
                    <option value=""></option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label htmlFor="" style={{ fontSize: 13 }}>
                    Número de vía generadora
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Número de vía generadora"
                    name="numeroB"
                    value={formAddress.numeroB}
                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="" style={{ fontSize: 13 }}>
                    Letra de vía generadora
                  </label>
                  <select
                    className="form-select"
                    name="select_3"
                    value={formAddress.select_3}
                  >
                    <option value=""></option>
                    <option value="a">a</option>
                    <option value="b">b</option>
                    <option value="c">c</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label style={{ fontSize: 13 }}>Número de la placa</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Número de placa"
                    name="numeroC"
                    value={formAddress.numeroC}
                  />
                </div>
                {TypeOfProperty == "apartamento" && (
                  <div className="col-md-2">
                    <label style={{ fontSize: 13 }}>interior</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Número de placa"
                      name="numeroC"
                      value={formAddress.numeroC}
                    />
                  </div>
                )}
              </div>
              <div className="text-center">
                <h5>Dirección</h5>
                <p>{direction}</p>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-primary"
              data-bs-target="#ModalFather"
              data-bs-toggle="modal"
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
