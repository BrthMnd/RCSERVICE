import { useState, useEffect } from "react";
import { Datatables } from "../../components/Tables/Datatables";
import { useApiGet } from "../../hooks/useApi";
import { ButtonAction } from "../../Utils/ActionsTable";

const ColumnsDefault = (list) => {
  return [
    {
      name: "index",
      label: "Index",
      options: {
        sort: true,
        sortIndex: 0,
        filter: true,
        customBodyRender: (value) => <div className="center-cell">{value}</div>,
      },
    },
    {
      name: "publicationDate",
      label: "Fecha de Creacion de la Oferta",
      sort: true,
    },
    {
      name: "status",
      label: "Estado de la oferta",
      sort: true,
    },
    {
      name: "description",
      label: "Descripcion de la oferta",
      sort: true,
    },
    {
      name: "property",
      label: "Propiedad",
      sort: true,
      options: {
        customBodyRender: (value, tableMeta) => {
          const rowId = tableMeta.rowData[4];
          console.log("hola ");
          return (
            <a
              className="Link"
              style={{ cursor: "pointer" }}
              onClick={() => alert(rowId)}
            >
              Mas info
            </a>
          );
        },
      },
    },
    {
      name: "actions",
      label: "Acciones",
      options: {
        // sort: false,
        filter: false,
        customBodyRender: (value, tableMeta) =>
          ButtonAction(value, tableMeta, list),
      },
    },
  ];
};
function OffersStatus() {
  const url = "https://rcservice.onrender.com/api/ofertas/oferta_estado";
  const [list, setList] = useState([]);

  let [data, loading, error] = useApiGet(url);
  useEffect(() => {
    if (data) {
      const newList = data.map((items, index) => ({
        id: items._id,
        index: index + 1,
        status: items.id_status.name,
        publicationDate: items.id_offers.publicationDate,
        description: items.id_offers.description,
        property: items.id_offers.id_property,
      }));
      setList(newList);
    }
  }, [data]);

  return (
    <section className="sections custom-mui-datatable" id="section__property">
      {loading && <div>CARGANDO.....</div>}
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
      {!loading && !error && (
        <Datatables data={list} col={ColumnsDefault(list)} title="Candidatos" />
      )}
    </section>
  );
}
export default OffersStatus;
