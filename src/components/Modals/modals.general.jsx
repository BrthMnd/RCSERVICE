import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  changeDataVoid,
  changeModalVoid,
} from "../../features/modal/moda.slice";
import { ChangeDirection, ChangeDirectionVoid } from "../../features/modal/address.slice";
export function Modal({ children }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeDataVoid());
    dispatch(changeModalVoid());
  };
  const Titulo = useSelector((state) => state.modal.type);
  const direction = useSelector((state) => state.direction.direction);
  const titleProperty = () => {
    if (
      Titulo == "Candidatos de Oferta" ||
      Titulo == "Inmueble" ||
      Titulo == "Encargado" ||
      Titulo == "Propietario"
    ) {
      return "modal-xl";
    } else {
      return "modal-lg";
    }
  };
  return (
    <>
      <div
        className="modal fade"
        id="ModalFather"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
      >
        <div
          className={`modal-dialog modal-dialog-centered ${
            // Titulo == "Candidatos de Oferta" ? "modal-xl" : "modal-lg"
            titleProperty()
          }`}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {Titulo}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleClick}
              ></button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
      <ModalDirection />
    </>
  );
}
function ModalDirection() {
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
  const direction = `${formAddress.select_1} ${formAddress.numeroA}${formAddress.select_2} #${formAddress.numeroB}${formAddress.select_3} - ${formAddress.numeroC} `;
  dispatch(ChangeDirection(direction));
  return (
    <div
      className="modal fade"
      id="exampleModalToggle2"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
      tabindex="-2"
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
                  <select
                    className="form-select"
                    name="select_1"
                    value={formAddress.select_1}
                  >
                    <option value="CL" title="Calle">CL</option>
                    <option value="CR" title="Carrera">CR</option>
                    <option value="CQ" title="Circular">CQ</option>
                    <option value="DG" title="Diagonal ">DG</option>
                    <option value="TV" title="Transversal">TV</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Número"
                    name="numeroA"
                    value={formAddress.numeroA}
                  />
                </div>
                <div className="col-md-2">
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
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Número de vía generadora"
                    name="numeroB"
                    value={formAddress.numeroB}
                  />
                </div>
                <div className="col-md-2">
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
            <h5 >Dirección</h5>
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
              ✔ Listo!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
