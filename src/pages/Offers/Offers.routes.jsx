import { Datatables } from "../../components/Tables/Datatables";
import { useApi } from "../../hooks/useApi";

export const ColumnsDefault = [
  {
    name: "_id",
    label: "ID",
    sort: true,
  },
  {
    name: "publicationDate",
    label: "Fecha de Publicacion",
  },
  {
    name: "description",
    label: "Descripcion",
  },
  {
    name: "id_property",
    label: "Ciudad",
    sort: true,
    options: {
      customBodyRender: (value) => {
        return value.city;
      },
    },
  },
  {
    name: "id_property",
    label: "Nombre del dueño",
    sort: true,
    options: {
      customBodyRender: (value) => {
        return value.first_name;
      },
    },
  },
  {
    name: "id_property",
    label: "Genero",
    options: {
      customBodyRender: (value) => {
        return value.gender;
      },
    },
  },
];
export function Offers() {
  let [data, loading, error] = useApi(
    "https://rcservice.onrender.com/api/oferta"
  );

  return (
    <section className="sections" id="section__property">
      {loading && <div>CARGANDO.....</div>}
      {error && <div>{error}</div>}
      {!loading && !error && (
        <Datatables data={data} col={ColumnsDefault} title="Ofertas" />
      )}
    </section>
  );
}
export default Offers;
