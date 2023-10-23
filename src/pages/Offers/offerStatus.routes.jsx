import { useState, useEffect } from "react";
import { Datatables } from "../../components/Tables/Datatables";
import { ApiGet } from "../../hooks/useApi";
import { ButtonAction } from "../../Utils/ActionsTable";
import { ButtonStatus } from "../../Utils/CambiarEstado";
import { IconLoading } from "../../Utils/IconsLoading";

const ColumnsDefault = (list, url, title) => {
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
      name: "name",
      label: "Nombre del estado",
      sort: true,
    },
    {
      name: "description",
      label: "Descripción",
      sort: true,
    },
    {
      name: "estado",
      label: "Estado",
      sort: true,
      options: {
        // sort: false,
        filter: false,
        customBodyRender: (value, tableMeta) => (
          <ButtonStatus
            value={value}
            tableMeta={tableMeta}
            list={list}
            url={url}
            title={title}
          />
        ),
      },
    },
    {
      name: "actions",
      label: "Acciones",
      options: {
        // sort: false,
        filter: false,
        customBodyRender: (value, tableMeta) =>
          ButtonAction({ value, tableMeta, list, url, title }),
      },
    },
  ];
};
function OfferStatus() {
  const url = import.meta.env.VITE_URL_OFFERS_STATUS;
  const title = "Estados De Oferta";
  const [list, setList] = useState([]);

  let [data, loading, error] = ApiGet(url);
  useEffect(() => {
    if (data) {
      const newList = data.map((items, index) => {
        return {
          id: items._id,
          index: index + 1,
          name: items.name,
          description: items.description,
          estado: items.estado,
        };
      });
      setList(newList);
    }
  }, [data]);

  return (
    <section className="sections custom-mui-datatable" id="section__property">
      <IconLoading isLoading={loading} />
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
      {!loading && !error && (
        <Datatables
          data={list}
          col={ColumnsDefault(list, url, title)}
          title={title}
          url={url}
        />
      )}
    </section>
  );
}
export default OfferStatus;
