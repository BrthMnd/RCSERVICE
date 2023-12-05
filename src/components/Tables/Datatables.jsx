/* eslint-disable react/prop-types */
import MUIDataTable from "mui-datatables";
import { Options } from "./options";
export const Datatables = ({ col, data, title, url }) => {
  url;
  return (
    <div id="table_s">
      <MUIDataTable
        title={
          <div
            className="custom-table-title"
            style={{ textTransform: "capitalize" }}
          >
            {title}
          </div>
        }
        columns={col}
        options={Options(title, url)}
        data={data}
      />
    </div>
  );
};
