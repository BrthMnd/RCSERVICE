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

// export function GraficasInmueble({ data }) {
//   ("Data de categorias:");
//   data;
//   const [Labels, setLabels] = useState([]);
//   const [forDataSet, setForDataSet] = useState([]);
//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//   };

//   useEffect(() => {
//     const lista = data.map((items) => items.tipoPropiedad);
//     setLabels(lista);
//   }, [data]);

//   const resasd = {
//     labels: Labels,
//     datasets: [
//       {
//         label: "Tipo de inmueble",
//         data: [1, 1, 1], //organizar para llamar los verdaderos datos
//         backgroundColor: [
//           "rgba(0, 153, 153, 0.7)", // Verde azulado vivo
//           "rgba(255, 204, 0, 0.7)", // Amarillo intenso
//           "rgba(255, 102, 0, 0.7)", // Naranja vibrante
//           "rgba(0, 102, 204, 0.7)", // Azul claro fuerte
//           "rgba(0, 204, 0, 0.7)",
//         ],

//         borderColor: [
//           "rgba(0, 153, 153, 0.7)", // Verde azulado vivo
//           "rgba(255, 204, 0, 0.7)", // Amarillo intenso
//           "rgba(255, 102, 0, 0.7)", // Naranja vibrante
//           "rgba(0, 102, 204, 0.7)", // Azul claro fuerte
//           "rgba(0, 204, 0, 0.7)", // Verde brillante
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

export function GraficasInmueble({ data }) {
  const [labels, setLabels] = useState([]);
  const [datasetData, setDatasetData] = useState([]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Tipos de Inmuebles",
        position: "top",
        font: {
          size: 16,
        },
      },
    },
  };

  useEffect(() => {
    const tiposDePropiedades = data.map((items) => items.tipoPropiedad);
    const unicosTiposDePropiedades = Array.from(new Set(tiposDePropiedades));

    setLabels(unicosTiposDePropiedades);

    const datosPorTipo = unicosTiposDePropiedades.map((tipo) =>
      data.filter((item) => item.tipoPropiedad === tipo).length
    );

    setDatasetData(datosPorTipo);
  }, [data]);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Cantidad",
        data: datasetData,
        backgroundColor: [
          "rgb(30, 144, 255)",   // Azul
          "rgb(34, 139, 34)",     // Verde
          "rgba(255, 51, 51, 0.7)",   // Rojo
          "rgba(255, 165, 0, 0.7)",   // Naranja
          
        ],
        
      },
    ],
  };

  return (
    <div style={{ height: "300px", width: "470px" }}>
      {data && <Pie data={chartData} options={options} />}
    </div>
  );
}
