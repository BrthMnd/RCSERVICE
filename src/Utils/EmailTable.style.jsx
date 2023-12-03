/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
const TitleText = ({ value }) => {
  return <div className="for__email___datatable">{value}</div>;
};
export const ConfigStyleEmail = {
  customBodyRender: (value) => <TitleText value={value} />,
};
