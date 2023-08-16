import { Datatables } from "../../components/Tables/Datatables";
import { useApi } from "../../hooks/useApi";

export function Owners() {
  let [data, loading, error] = useApi();

  return (
    <section className="sections" id="section__property">
      {loading && <div>CARGANDO.....</div>}
      {error && <div>{error}</div>}
      {!loading && !error && <Datatables data={data} />}
    </section>
  );
}
export default Owners;
