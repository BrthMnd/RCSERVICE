import { Datatables } from "../../components/Tables/Datatables";
import { useApi } from "../../hooks/useApi";

function Managers() {
  let [data, loading, error] = useApi();

  return (
    <section className="sections" id="section__property">
      {loading && <div>CARGANDO.....</div>}
      {error && <div>{error.messege}</div>}
      {!loading && !error && (
        // definir titulo, datos, y columnas
        <Datatables data={data} title={"Api Rick y morty"} />
      )}
    </section>
  );
}
export default Managers;
