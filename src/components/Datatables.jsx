import MUIDataTable from "mui-datatables";
import { Add } from "@mui/icons-material/";
import { data } from "./data";

import IconButton from "@mui/material/IconButton";

const columns = [
  {
    name: "eyeColor",
    sort: true,
  },
  "name",
  "gender",
  "email",
  "phone",
];

export function Datatables() {
  const options = {
    filter: true,
    responsive: "standard",
    fixedHeader: true,
    fixedSelectColumn: true,
    tableBodyHeight: "60vh",
    selectableRowsHideCheckboxes: true,
    tableId: true,
    selectableRows: "none",
    customToolbar: () => {
      return (
        <>
          <IconButton onClick={() => handleClick()}>
            <Add /> {/* Icono de búsqueda */}
          </IconButton>
        </>
      );
    },
  };
  function handleClick() {
    console.log("hola");
  }
  return (
    // <div id="table">
    <MUIDataTable
      title={"INMUEBLES"}
      {...{ data, columns, options }}
      // actions={actions}
    />
    // </div>
  );
}
