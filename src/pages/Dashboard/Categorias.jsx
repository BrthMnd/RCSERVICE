// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { useEffect, useState } from "react";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export function Graficas({ data }) {
//   ("Data de categorias:");
//   data;
//   const [Labels, setLabels] = useState([]);
//   const [forDataSet, setForDataSet] = useState([]);
//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//   };

//   useEffect(() => {
//     const lista = data.map((items) => items.Nombre_Categoria);
//     lista;
//     setLabels(lista);
//   }, [data]);

//   const resasd = {
//     labels: Labels,
//     datasets: [
//       {
//         label: "Categorías de servicio",
//         data: [1, 3, 4, 6, 1, 5, 3, 2], // organizar para llamar los verdaderos datos
//         backgroundColor: [
//           "#3366cc",
//           "#3399ff",
//           "#003366",
//           "#66b2ff",
//           "#0080ff",
//         ],
//         borderColor: ["#3366cc", "#3399ff", "#003366", "#66b2ff", "#0080ff"],

//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div style={{ height: "300px", width: "400px" }}>
//       {data && <Bar data={resasd} options={options} />}
//     </div>
//   );
// }

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
    const categoryList = data.map((item) => item.Nombre_Categoria);
    const uniqueCategories = [...new Set(categoryList)]; // Elimina duplicados

    setLabels(uniqueCategories);
    const lista = data.map((items) => items.Nombre_Categoria);
    setLabels(lista);
  }, [data]);

  useEffect(() => {
    if (labels.length > 0) {
      const newData = labels.map(
        (category) =>
          data.filter((item) => item.Nombre_Categoria === category).length
      );
      setDataByCategory(newData);
    }
  }, [labels, data]);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Categorías de servicio",

        data: dataByCategory,
        backgroundColor: [
          "rgba(135, 206, 250, 1)", // Azul cielo
          "rgba(0, 123, 255, 1)", // Azul mar
          "rgba(70, 130, 180, 1)", // Azul acero
          // Agrega más colores si es necesario
        ],
        borderColor: [
          "rgba(135, 206, 250, 1)", // Azul cielo
          "rgba(0, 123, 255, 1)", // Azul mar
          "rgba(70, 130, 180, 1)", // Azul acero
          // Agrega más colores si es necesario
        ],
        borderWidth: 1,
        barThickness: 40,
        borderRadius: 10,
      },
    ],
  };

  return (
    <div style={{ height: "300px", width: "500px" }}>
      {data && <Bar data={chartData} options={options} />}
    </div>
  );
}
