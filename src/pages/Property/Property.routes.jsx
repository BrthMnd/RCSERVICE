import { useState, useEffect } from "react";
import { Datatables } from "../../components/Tables/Datatables";
import { ApiGet } from "../../hooks/useApi";
import { ButtonAction } from "../../Utils/ActionsTable";
import { IconLoading } from "../../Utils/IconsLoading";

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
      name: "tipoPropiedad",
      label: "Tipo de Propiedad",
    },
    {
      name: "direccion",
      label: "Dirección",
      sort: true,
    },
    {
      name: "nombreCompletoOwner",
      label: "Propietario",
      sort: true,
    },
    {
      name: "phoneOwner",
      label: "Teléfono Propietario",
    },
    {
      name: "nombreCompletoManager",
      label: "Encargado",
    },

    {
      name: "phoneManager",
      label: "Teléfono Encargado",
      sort: true,
    },
    {
      name: "nombrex",
      label: "Arrendatario",
      sort: true,
    },
    {
      name: "telefonox",
      label: "Teléfono Arrendatario",
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
  const url = "/inmuebles/inmueble";
  const [list, setList] = useState([]);
  const title = "Inmueble";

  let [data, loading, error] = ApiGet(url);
  useEffect(() => {
    if (data) {
      const newList = data.map((property, index) => {
        let pr = property.nombre ? property.nombre : "No asignado";
        let tl = property.telefono ? property.telefono : "No asignado";
        let status = property.estado ? "Activo" : "inactivo";
        return {
          id: property._id,
          index: index + 1,
          nombreCompletoOwner: property.id_propietario.nombre,
          nombreCompletoManager: property.id_encargado.nombre,
          phoneOwner: property.id_propietario.telefono,
          phoneManager: property.id_encargado.telefono,
          estadoInmueble: status,
          //
          tipoPropiedad: property.tipoPropiedad,
          direccion: property.direccion,
          metrosCuadrados: property.metrosCuadrados,
          nHabitaciones: property.nHabitaciones,
          nBanos: property.nBanos,
          fechConstruccion: property.fechConstruccion,
          plano: property.plano,
          //
          id_propietario: property.id_propietario._id,
          id_encargado: property.id_encargado._id,
          propietario_documento: property.id_propietario.documento,
          encargado_documento: property.id_encargado.documento,
          //
          documento: property.documento,
          nombrex: pr,
          nombre: property.nombre,
          correo: property.correo,
          telefonox: tl,
          telefono: property.telefono,
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
export default Property;
