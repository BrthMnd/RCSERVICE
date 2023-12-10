export const ModalCalificar = () => {
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
              Calificar Proveedor
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body"></div>
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
};
