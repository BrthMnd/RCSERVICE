import { Add } from "@mui/icons-material/";
import { OpenAdd } from "./OpenAdd";

const ToolbarCustomIcon = (IdModal) => {
  return (
    <>
      <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="Agregar">
        <OpenAdd IdModal={IdModal}>
          <Add />
        </OpenAdd>
      </span>
    </>
  );
};

export const Options = (idModal = "offers") => {
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
      },
    },
    customToolbar: () => {
      return ToolbarCustomIcon(idModal);
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
