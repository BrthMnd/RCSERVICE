import React, { useState, useEffect } from "react";

function TypeDocumentInput({ onDocumentChange }) {
  const [tipoDocumento, setTypeDocument] = useState("");

  useEffect(() => {
    onDocumentChange(tipoDocumento); // Llama a la función proporcionada para pasar la
  }, [tipoDocumento]);

  return (
    <>
      <select
        value={tipoDocumento}
        className="col-md-2 form-select btn btn-outline-secondary dropdown-toggle"
        onChange={(e) => setTypeDocument(e.target.value)}
        style={{ borderColor: "#BDC3C7", height: "55px" }}
      >
        <option
          value="C.C"
          title="Cédula de Ciudadanía"
          className="dropdown-item"
        >
          C.C
        </option>
        <option
          value="C.E"
          title="Cédula de Extranjería"
          className="dropdown-item"
        >
          C.E
        </option>
      </select>
    </>
  );
}

export default TypeDocumentInput;
