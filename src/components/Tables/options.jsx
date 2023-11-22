import { Add } from "@mui/icons-material/";
import { OpenAdd } from "./OpenAdd";
// import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const ToolbarCustomIcon = (IdModal, url) => {
  return (
    <>
      <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Agregar">
        <OpenAdd IdModal={IdModal} URL={url}>
          <Add />
        </OpenAdd>
      </span>
    </>
  );
};

export const Options = (idModal, url) => {
  // const role = useSelector((state) => state.user.role);

  const Location = useLocation();
  console.log(Location);
  return {
    filter: true,
    responsive: "standard",

    fixedHeader: true,
    fixedSelectColumn: true,
    tableID: true,
    tableBodyHeight: "60vh",
    selectableRowsHideCheckboxes: true,
    selectableRows: "none",
    print: false,

    textLabels: {
      filter: {
        title: "Mostrar/Ocultar",
        reset: "Restablecer",
        apply: "Aplicar",
        search: "Buscar",
        columns: "Columnas",
      },

      toolbar: {
        print: "imprimir",
        downloadCsv: "descargar csv",
        filterTable: "Filtrar Tablas",
        viewColumns: "Ver columnas",
        search: "Buscar",
      },
      body: {
        noMatch: "No se encontraron registros",
        toolTip: "Ordenar",
      },
      pagination: {
        next: "Siguiente",
        previous: "Anterior",
        rowsPerPage: "Por páginas", // Aquí cambiamos el texto
        displayRows: "de",
      },
      viewColumns: {
        title: "Mostrar columnas",
        titleAria: "Mostrar/Ocultar columnas",
      },
    },
    customToolbar: () => {
      return Location.pathname == "/proveedores/proveedor"
        ? ""
        : ToolbarCustomIcon(idModal, url);
    },
    setCellProps: () => {
      return {
        style: {
          display: "flex",
          justifyContent: "center", // Centra horizontalmente
          alignItems: "center", // Centra verticalmente
        },
      };
    },
  };
};

export const ColumnsDefault = [
  {
    name: "id",
    label: "ID",
  },
  {
    name: "name",
    label: "Nombre",
  },
  {
    name: "status",
    label: "Estado",
  },
  {
    name: "species",
    label: "Especie",
  },
  {
    name: "type",
    label: "Tipo",
  },
  {
    name: "gender",
    label: "Genero",
  },
];
export const TitleDefault = "Titulo Por defecto";
