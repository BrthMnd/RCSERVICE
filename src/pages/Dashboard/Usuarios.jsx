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

export function GraficasUsuarios({ data }) {
  console.log("Data de usuarios:");
  console.log(data);

  const [labels, setLabels] = useState([]);
  const [dataByRole, setDataByRole] = useState([]);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  useEffect(() => {
    const roles = data.map((item) => item.role);
    const uniqueRoles = [...new Set(roles)]; // Elimina duplicados

    setLabels(uniqueRoles);
  }, [data]);

  useEffect(() => {
    if (labels.length > 0) {
      const newData = labels.map((role) =>
        data.filter((item) => item.role === role).length
      );
      setDataByRole(newData);
    }
  }, [labels, data]);

  const resasd = {
    labels: labels,
    datasets: [
      {
        label: "Usuarios",
        data: dataByRole,
        backgroundColor: ["#FF6EB4", "#FF7435"], // Rosa vivo y terracota vivo
        borderWidth: 1,
        borderColor: ["#FF6EB4", "#FF7435"], // Rosa vivo y terracota vivo
        barThickness: 60,
        borderRadius: 10,
      },
    ],
  };

  return (
    <div style={{ height: "300px", width: "470px" }}>
      {data && <Bar data={resasd} options={options} />}
    </div>
  );
}
