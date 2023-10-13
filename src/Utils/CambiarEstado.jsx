import { AlertStatus } from "../assets/js/Alerts";

export function ButtonStatus({ tableMeta, list, url, title, value }) {
  const rowData = list[tableMeta.rowIndex];
  const handleClick = (e) => {
    let status;
    if (e.target.checked) {
      status = true;
    } else {
      status = false;
    }
    let result = {
      id: rowData.id,
      estado: status,
    };

    AlertStatus(url, result);
    e.preventDefault();
  };
  if (value == "Activo") {
    value = true;
  } else if (value == "Inactivo") {
    value = false;
  }

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        onChange={handleClick}
        checked={value}
      />
      <label className="form-check-label">
        {value ? "Activo" : "Inactivo"}
      </label>
    </div>
  );
}
