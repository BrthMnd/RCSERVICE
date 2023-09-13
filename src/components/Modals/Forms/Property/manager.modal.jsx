
export function FormManager(props) {
    return (

        <>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputDocument" className="form-label">
                Documento
              </label>
              <input
                type="text"
                className="form-control"
                id="inputDocument"
                placeholder="Ingrese su Documento"
              />
            </div>
  
            <div className="col-md-6">
              <label htmlFor="inputName" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Ingrese su nombre"
              />
            </div>
  
            <div className="col-md-6">
              <label htmlFor="inputLastName" className="form-label">
                Apellidos
              </label>
              <input
                type="text"
                className="form-control"
                id="inputLastName"
                placeholder="Ingrese sus apellidos"
              />
            </div>
  
            <div className="col-md-6">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Ingrese su Email"
              />
            </div>
  
            <div className="col-md-6">
              <label htmlFor="inputPhone" className="form-label">
                Teléfono
              </label>
              <input
                type="tel"
                className="form-control"
                id="inputPhone"
                placeholder="Ingrese su teléfono"
              />
            </div>
  
            <div className="col-md-6">
              <label htmlFor="inputAddress" className="form-label">
                Dirección
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Ingrese su dirección"
              />
            </div>
            <div className="col-12 text-end">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </form>
          </>

    );
  }