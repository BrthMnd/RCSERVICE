import { ApiGet } from "../../../../hooks/useApi";

export const ServiceModal = () => {
  const url = "https://rcservice.onrender.com/api/proveedores/Categoria";
  const [data, error, loading] = ApiGet(url);
  return (
    <>
      {loading && <div>CARGANDO..........</div>}
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}

      {!loading && (
        <form className="row g-3">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="inputIdService" className="form-label">
                ID del Servicio
              </label>
              <input
                type="text"
                className="form-control"
                id="inputIdService"
                placeholder="Ingrese el ID del servicio"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="inputNameService" className="form-label">
                Nombre del Servicio
              </label>
              <input
                type="text"
                className="form-control"
                id="inputNameService"
                placeholder="Ingrese el nombre del servicio"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="inputCategoryService" className="form-label">
                Categoría del Servicio
              </label>
              <select
                id="inputCategoryService"
                className="form-select"
                aria-label="Seleccione una categoría"
              >
                {data?.map((items, index) => {
                  return (
                    <option key={index} value={items._id}>
                      {items.Nombre_Categoria}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="inputDescriptionService" className="form-label">
                Descripción del Servicio
              </label>
              <textarea
                className="form-control"
                id="inputDescriptionService"
                rows="4"
                placeholder="Ingrese una descripción del servicio"
              ></textarea>
            </div>
          </div>
          <div className="col-12 text-end">
            <button type="button" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      )}
    </>
  );
};
