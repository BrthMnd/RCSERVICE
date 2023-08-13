import { Datatables } from "../../components/Tables/Datatables";
export function Property() {
  const i = "true";
  console.log(i);
  return (
    <section className="sections" id="section__property">
      <div className="table-zone">
        <Datatables />
      </div>
    </section>
  );
}
export default Property;
