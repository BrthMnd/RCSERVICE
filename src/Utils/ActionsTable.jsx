import { useDispatch } from "react-redux";

export function AddActions() {
  console.log("yes");
  const dispatch = useDispatch();
  const handleDispatch = () => {
    // Aquí creas una acción utilizando tu acción de Redux y luego la envías mediante dispatch
    dispatch(ChageValue(true)); // Suponiendo que tienes una acción llamada ChageValue
  };
  handleDispatch();
  return;
}
export function EditActions(table) {
  alert("editando...");
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
