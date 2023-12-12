// import {
//   Chart as ChartJS,
//   Title,
//   Tooltip,
//   Legend,
//   PieController,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
// } from "chart.js";
// import { useEffect, useState } from "react";
// import { Pie } from "react-chartjs-2";

// ChartJS.register(
//   PieController,
//   CategoryScale,
//   Title,
//   Tooltip,
//   Legend,
//   LinearScale,
//   PointElement,
//   LineElement
// );

// export function GraficasOfertaEstado({ data }) {
//   ("Data de ofertas:");
//   (data);
//   const [labels, setLabels] = useState([]);
//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//   };

//   useEffect(() => {
//     const lista = data.map((items) => items.name);
//     (lista);
//     setLabels(lista);
//   }, [data]);

//   const resasd = {
//     labels: labels,
//     datasets: [
//       {
//         label: "Estado de la oferta",
//         data: [1, 1], // organizar para llamar los verdaderos datos
//         backgroundColor: [
//           'rgba(0, 153, 153, 0.7)',   // Verde azulado vivo
//           'rgba(255, 204, 0, 0.7)',   // Amarillo intenso
//           'rgba(255, 102, 0, 0.7)',   // Naranja vibrante
//           'rgba(0, 102, 204, 0.7)',   // Azul claro fuerte
//           'rgba(0, 204, 0, 0.7)',
//         ],

//         borderColor: [
//           'rgba(0, 153, 153, 0.7)',   // Verde azulado vivo
//           'rgba(255, 204, 0, 0.7)',   // Amarillo intenso
//           'rgba(255, 102, 0, 0.7)',   // Naranja vibrante
//           'rgba(0, 102, 204, 0.7)',   // Azul claro fuerte
//           'rgba(0, 204, 0, 0.7)',      // Verde brillante
//         ],
//       },
//     ],
//   };

//   return (
//     <div style={{ height: "300px", width: "400px" }}>
//       {data && <Pie data={resasd} options={options} />}
//     </div>
//   );
// }

import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  DoughnutController,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  LinearScale,
  ArcElement,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  DoughnutController,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  LinearScale,
  ArcElement
);

export function GraficasOfertaEstado({ data }) {
  const [labels, setLabels] = useState([]);
  const [offerCounts, setOfferCounts] = useState([]);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom", // Puedes ajustar la posición del legend si lo deseas
      },
      title: {
        display: true,
        text: "Estado de Ofertas",
        position: "top",
        font: {
          size: 16,
        },
      },
    },
  };

  useEffect(() => {
    // Agrupar y sumar cantidades por estado
    const groupedData = data.reduce((acc, item) => {
      if (!acc[item.state]) {
        acc[item.state] = 0;
      }
      acc[item.state] += 1; // Puedes cambiar esto si la cantidad no es 1 siempre
      return acc;
    }, {});

    // Extraer etiquetas y cantidades
    const lista = Object.keys(groupedData);
    const counts = Object.values(groupedData);

    setLabels(lista);
    setOfferCounts(counts);
  }, [data]);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Cantidad",
        data: offerCounts,
        backgroundColor: [       
          "rgba(139, 0, 0, 0.9)",
          "rgb(255, 215, 0)",
          "rgba(0, 204, 0, 0.7)",
          "rgba(255, 102, 0, 0.7)",
        ],
        
        borderWidth: 2,
      },
    ],
  };

  return (
    <div style={{ height: "300px", width: "470px" }}>
      {data && <Doughnut data={chartData} options={options} />}
    </div>
  );
}
