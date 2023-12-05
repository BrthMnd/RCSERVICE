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

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  DoughnutController,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

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
  ("Data de ofertas:");
  data;
  const [labels, setLabels] = useState([]);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  useEffect(() => {
    const lista = data.map((item) => item.name);
    lista;
    setLabels(lista);
  }, [data]);

  const resasd = {
    labels: labels,
    datasets: [
      {
        label: "Estado de la oferta",
        data: [2, 2], // organizar para llamar los verdaderos datos
        backgroundColor: [
          "rgba(255, 102, 204, 0.7)",
          "rgba(255, 204, 0, 0.7)", // Amarillo intenso
          "rgba(255, 102, 0, 0.7)", // Naranja vibrante
          "rgba(0, 102, 204, 0.7)", // Azul claro fuerte
          "rgba(0, 204, 0, 0.7)",
        ],
        borderColor: [
          "rgba(255, 255, 255, 1)", // Borde blanco
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div style={{ height: "300px", width: "400px" }}>
      {data && <Doughnut data={resasd} options={options} />}
    </div>
  );
}
