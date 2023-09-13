/* eslint-disable react/prop-types */
import MUIDataTable from "mui-datatables";
import { Options, TitleDefault } from "./options";
export const Datatables = ({ col, data, title = TitleDefault }) => {
  return (
    <div id="table_s">
      <MUIDataTable
        title={<div className="custom-table-title">{title}</div>}
        columns={col}
        options={Options(title)}
        data={data}
      />
    </div>
  );
};
