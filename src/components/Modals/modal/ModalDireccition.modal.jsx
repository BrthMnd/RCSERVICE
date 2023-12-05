import { useState } from "react";
import { useDispatch } from "react-redux";
import { ChangeDirection } from "../../../features/modal/address.slice";

export function ModalDirection({ direction }) {
  const dispatch = useDispatch();
  const [formAddress, setFormAddress] = useState({
    select_1: "",
    numeroA: "",
    select_2: "",
    numeroB: "",
    select_3: "",
    numeroC: "",
  });
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormAddress((prevFormAddress) => ({
      ...prevFormAddress,
      [name]: value,
    }));
  };
  const DirectionExtructure = `${formAddress.select_1} ${formAddress.numeroA}${formAddress.select_2} #${formAddress.numeroB}${formAddress.select_3} - ${formAddress.numeroC} `;
  dispatch(ChangeDirection(DirectionExtructure));
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
                    defaultValue={formAddress.select_1}
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
