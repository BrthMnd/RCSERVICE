export function FormProperty() {
    return (
<>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputTipoPropiedad" className="form-label">
                Tipo Propiedad
              </label>
              <select id="inputTipoPropiedad" className="form-select">
                <option value="" disabled selected>
                  Seleccione una opción
                </option>
                <option>Apartamento</option>
                <option>Casa</option>
                <option>Unidad</option>
                <option>Casa_Finca</option>
              </select>
            </div>
  
            <div className="col-md-6">
              <label htmlFor="inputDocument" className="form-label">
                Direccion
              </label>
              <input
                type="text"
                className="form-control"
                id="inputDireccion"
                placeholder="Ingrese su Direccion"
              />
            </div>
  
            <div className="col-md-6">
              <label htmlFor="inputDocument" className="form-label">
                Metros Cuadrados
              </label>
              <input
                type="number"
                className="form-control"
                id="inputMetrosCuadrados"
                placeholder="Ingrese Metros Cuadrados"
              />
            </div>
  
            <div className="col-md-6">
              <label htmlFor="inputNumHabitacion" className="form-label">
                Numero Habitaciones
              </label>
              <input
                type="number"
                className="form-control"
                id="inputNumHabitacion"
                placeholder="Ingrese el numero de habitaciones"
              />
            </div>
  
            <div className="col-md-6">
              <label htmlFor="inputNumBanos" className="form-label">
                Numero de Baños
              </label>
              <input
                type="number"
                className="form-control"
                id="inputNumBanos"
                placeholder="Ingrese el numero de Baños"
              />
            </div>
  
            <div className="col-md-6">
              <label htmlFor="inputFechaConstruccion" className="form-label">
                Fecha Construccion
              </label>
              <input
                type="date"
                className="form-control"
                id="inputFechaConstruccion"
                placeholder="Ingrese la fecha de construccion del inmueble"
              />
            </div>
  
            <div class="col-md-6">
              <label for="plano" class="form-label">
                Planos
              </label>
              <input
                type="file"
                class="form-control"
                id="plano"
                name="plano"
                accept=".pdf, .doc, .docx"
              />
            </div>
  
            <div className="col-md-6">
              <label htmlFor="inputPropietario" className="form-label">
                Propietario
              </label>
              <select id="inputPropietario" className="form-select">
                <option value="" disabled selected>
                  Seleccione una opción
                </option>
                <option>1234567</option>
                <option>1523456</option>
                <option>98765432</option>
                <option>98345433</option>
              </select>
            </div>
  
            <div className="col-md-6">
              <label htmlFor="inputEncargado" className="form-label">
                Encargado
              </label>
              <select id="inputEncargado" className="form-select">
                <option value="" disabled selected>
                  Seleccione una opción
                </option>
                <option>1234567</option>
                <option>1523456</option>
                <option>98765432</option>
                <option>98345433</option>
              </select>
            </div>
  
            <div className="col-12 text-end">
              <button type="submit" className="btn btn-primary">
                Registrar
              </button>
            </div>
          </form>
          </>
    );
  }