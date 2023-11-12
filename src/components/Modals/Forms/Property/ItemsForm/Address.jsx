/* eslint-disable react/prop-types */
// DireccionForm.js
import { useState, useEffect } from "react";

function DireccionForm({ onDireccionChange }) {
  const [tipoVia, setTipoVia] = useState("");
  const [nombreVia, setNombreVia] = useState("");
  const [sufijoVia, setSufijoVia] = useState("");
  const [numeroViaGeneradora, setNumeroViaGeneradora] = useState("");
  const [sufijoViaGeneradora, setSufijoViaGeneradora] = useState("");
  const [numeroPlaca, setNumeroPlaca] = useState("");

  useEffect(() => {
    // Construir la dirección de acuerdo con la estructura proporcionada
    const direccion = `${tipoVia} ${nombreVia}${sufijoVia} #${numeroViaGeneradora}${sufijoViaGeneradora} - ${numeroPlaca}`;
    onDireccionChange(direccion); // Llama a la función proporcionada para pasar la dirección
  }, [
    tipoVia,
    nombreVia,
    sufijoVia,
    numeroViaGeneradora,
    sufijoViaGeneradora,
    numeroPlaca,
  ]);

  return (
    <div>
      <div className="row g-3">
        <div className="col-md-2">
          <select
            className="form-select"
            value={tipoVia}
            onChange={(e) => setTipoVia(e.target.value)}
          >
            //Calle (CL), Carrera (CR), Circular (CQ), Diagonal (DG) o
            Transversal (TV).
            <option value="CL">CL</option>
            <option value="CR">CR</option>
            <option value="CQ">CQ</option>
            <option value="DG">DG</option>
            <option value="TV">TV</option>
          </select>
        </div>
        <div className="col-md-2">
          <input
            type="text"
            className="form-control"
            placeholder="Número"
            value={nombreVia}
            onChange={(e) => setNombreVia(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <select
            className="form-select"
            value={sufijoVia}
            onChange={(e) => setSufijoVia(e.target.value)}
          >
            <option value=""></option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>
        <div className="col-md-2">
          <input
            type="text"
            className="form-control"
            placeholder="Número de vía generadora"
            value={numeroViaGeneradora}
            onChange={(e) => setNumeroViaGeneradora(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <select
            className="form-select"
            value={sufijoViaGeneradora}
            onChange={(e) => setSufijoViaGeneradora(e.target.value)}
          >
            <option value=""></option>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
          </select>
        </div>
        <div className="col-md-2">
          <input
            type="text"
            className="form-control"
            placeholder="Número de placa"
            value={numeroPlaca}
            onChange={(e) => setNumeroPlaca(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default DireccionForm;
