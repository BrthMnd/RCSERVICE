import { Add } from "@mui/icons-material/";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { handleClick } from "./CustomFuntions";

// eslint-disable-next-line react-refresh/only-export-components
const ToolbarCustomIcon = () => {
  return (
    <>
      <Tooltip title="Agregar">
        <IconButton name="Add" id="Add" onClick={() => handleClick()}>
          <Add />
        </IconButton>
      </Tooltip>
    </>
  );
};

export const Options = {
  filter: true,
  responsive: "standard",

  fixedHeader: true,
  fixedSelectColumn: true,
  tableID: true,
  tableBodyHeight: "60vh",
  selectableRowsHideCheckboxes: true,
  selectableRows: "none",
  viewColumns: false,

  textLabels: {
    filter: {
      title: "Mostrar/Ocultar",
      reset: "Restablecer",
      apply: "Aplicar",
      search: "Buscar",
      columns: "Columnas",
    },

    toolbar: {
      print: "imprimir", // Reemplaza el texto del icono con un espacio en blanco
      downloadCsv: "descargar csv",
      filterTable: "Filtrar Tablas",
    },
  },
  customToolbar: ToolbarCustomIcon,
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
