export function AddActions() {
  alert("Agregando...");
}
export function EditActions(table) {
  alert("Editando...");
}
export function DeleteActions(table) {
  alert("Eliminando...");
}

export const ButtonAction = (value, tableMeta, list) => {
  const rowData = list[tableMeta.rowIndex];
  return (
    <div className="buttons__actions">
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => EditActions(rowData)}
      >
        <i className="fas fa-edit"></i>
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => DeleteActions(rowData)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
