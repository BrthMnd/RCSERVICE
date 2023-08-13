/* eslint-disable react/prop-types */
import MUIDataTable from "mui-datatables";
import { Options, ColumnsDefault, TitleDefault } from "./options";

export const Datatables = ({
  col = ColumnsDefault,
  data,
  title = TitleDefault,
}) => {
  console.log("hola sss");
  console.log(data);
  return (
    <MUIDataTable
      title={<div className="custom-table-title">{title}</div>}
      columns={col}
      options={Options}
      data={data}
    />
  );
};
