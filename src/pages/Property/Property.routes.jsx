import { useState, useEffect } from "react";
import { Datatables } from "../../components/Tables/Datatables";
import { useApiGet } from "../../hooks/useApi";
import { ButtonAction } from "../../Utils/ActionsTable";

const ColumnsDefault = (list) => {
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
          ButtonAction(value, tableMeta, list),
      },
    },
  ];
};

// "_id": "64e15b0e02ebf39a72f5cc34",
//! "tipoPropiedad": "Rubber",
//! "direccion": null,
// "metrosCudrados": 60,
// "nHabitaciones": 4,
// "nBanos": 6,
// "fechConstruccion": "2022-11-23T20:13:38.000Z",
// "plano": "https://biglobe.ne.jp/donec/ut/dolor.xml?felis=tincidunt",
// "id_propietario": {
// "fechCreacion": "2023-09-02T04:20:42.172Z",
// "_id": "64deb1be02ebf39a72715c35",
// "documento": 93512476,
//! "nombres": "Harlan",
//! "apellidos": "Lilleyman",
// "correo": "hlilleyman3@unicef.org",
// "gender": "Male",
//! "telefono": "+1 412 340 9662",
// "direccion": "13-280 - Hazardous Material Remediation"
// "id_encargado": {
//   "_id": "64e0891b02ebf39a72484b0d",
//   "documento": 1038985740,
//!   "nombres": "Daron",
//!   "apellidos": "Antecki",
//   "correo": "dantecki1@google.it",
//!   "telefono": "411-715-5177",
//   "estado": false,
//   "direccion": "75 Manufacturers Street",
//   "fechCreacion": "2023-08-16T00:45:13.000Z"

export function Property() {
  const url = "https://rcservice.onrender.com/api/inmuebles/inmueble";
  const [list, setList] = useState([]);

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
          // email: property.id_property.email,
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
        <Datatables data={list} col={ColumnsDefault(list)} title="Listado Inmueble" />
      )}
    </section>
  );
}
export default Property;
