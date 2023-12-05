import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function Graficas({ data }) {
  ("Data de categorias:");
  data;
  const [Labels, setLabels] = useState([]);
  const [forDataSet, setForDataSet] = useState([]);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  useEffect(() => {
    const lista = data.map((items) => items.Nombre_Categoria);
    lista;
    setLabels(lista);
  }, [data]);

  const resasd = {
    labels: Labels,
    datasets: [
      {
        label: "Categorias de servicio",
        data: [1, 3, 4, 6, 1, 5, 3, 2], // organizar para llamar los verdaderos datos
        backgroundColor: [
          "#3366cc",
          "#3399ff",
          "#003366",
          "#66b2ff",
          "#0080ff",
        ],
        borderColor: ["#3366cc", "#3399ff", "#003366", "#66b2ff", "#0080ff"],

        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ height: "300px", width: "400px" }}>
      {data && <Bar data={resasd} options={options} />}
    </div>
  );
}
