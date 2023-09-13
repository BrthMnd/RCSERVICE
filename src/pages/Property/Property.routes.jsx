import { useState, useEffect } from "react";
import { Datatables } from "../../components/Tables/Datatables";
import { useApiGet } from "../../hooks/useApi";
import { ButtonAction } from "../../Utils/ActionsTable";

const ColumnsDefault = (list, url, title) => {
  return [
    {
      name: "index",
      label: "Index",
      sort: false,
      options: {
        customBodyRender: (value) => <div className="center-cell">{value}</div>,
      },
    },
    {
      name: "typeProperty",
      label: "Tipo de Propiedad",
    },
    {
      name: "address",
      label: "Dirección",
      sort: true,
    },
    {
      name: "nameOwner",
      label: "Propietario",
      sort: true,
    },
    {
      name: "phoneOwner",
      label: "Teléfono Propietario",
    },
    {
      name: "nameManager",
      label: "Encargado",
    },

    {
      name: "phoneManager",
      label: "Teléfono Encargado",
      sort: true,
    },
    {
      name: "actions",
      label: "Acciones",
      options: {
        sort: false,
        // filter: false,
        customBodyRender: (value, tableMeta) =>
          ButtonAction({ value, tableMeta, list, url, title }),
      },
    },
  ];
};

export function Property() {
  const url = "https://rcservice.onrender.com/api/inmuebles/inmueble";
  const [list, setList] = useState([]);
  const title = "Inmueble";

  let [data, loading, error] = useApiGet(url);
  useEffect(() => {
    if (data) {
      const newList = data.map((property, index) => {
        let nombreCompletoOwner = `${property.id_propietario.nombres} ${property.id_propietario.apellidos}`;
        let nombreCompletoManager = `${property.id_encargado.nombres} ${property.id_encargado.apellidos}`;

        return {
          id: property._id,
          index: index + 1,
          typeProperty: property.tipoPropiedad,
          address: property.direccion,
          nameOwner: nombreCompletoOwner,
          phoneOwner: property.id_propietario.telefono,
          nameManager: nombreCompletoManager,
          phoneManager: property.id_encargado.telefono,
        };
      });
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
        <Datatables
          data={list}
          col={ColumnsDefault(list, url, title)}
          title={title}
        />
      )}
    </section>
  );
}
export default Property;
