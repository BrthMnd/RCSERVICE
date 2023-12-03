import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PieController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  PieController,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  LineElement
);

export function GraficasInmueble ({ data }) {
  console.log("Data de categorias:");
  console.log(data);
  const [Labels, setLabels] = useState([]);
  const [forDataSet, setForDataSet] = useState([]);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  useEffect(() => {
    const lista = data.map((items) => items.tipoPropiedad);
    console.log(lista);
    setLabels(lista);
  }, [data]);

  const resasd = {
    labels: Labels,
    datasets: [
      {
        label: "Tipo de inmueble",
        data: [1,1,1], //organizar para llamar los verdaderos datos
        backgroundColor: [
          'rgba(0, 153, 153, 0.7)',   // Verde azulado vivo
          'rgba(255, 204, 0, 0.7)',   // Amarillo intenso
          'rgba(255, 102, 0, 0.7)',   // Naranja vibrante
          'rgba(0, 102, 204, 0.7)',   // Azul claro fuerte
          'rgba(0, 204, 0, 0.7)', 
        ],
       
        borderColor: [
          'rgba(0, 153, 153, 0.7)',   // Verde azulado vivo
          'rgba(255, 204, 0, 0.7)',   // Amarillo intenso
          'rgba(255, 102, 0, 0.7)',   // Naranja vibrante
          'rgba(0, 102, 204, 0.7)',   // Azul claro fuerte
          'rgba(0, 204, 0, 0.7)',      // Verde brillante
        ],
      },
    ],
  };

  return (
    <div style={{ height: "300px", width: "400px" }}>
      {data && <Pie data={resasd} options={options} />}
    </div>
  );
}



