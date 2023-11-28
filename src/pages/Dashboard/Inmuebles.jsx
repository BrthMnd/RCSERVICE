// import { PolarArea } from "react-chartjs-2";
// export function GraficasInmueble ({data}){
    
    
    
//       const options = {
//         responsive: true,
//         maintainAspectRatio: false,
//       };
    
//       return (
//         <div style={{ height: '300px', width: '400px' }}>
//           {data && <PolarArea data={data} options={options}  />}
//         </div>
//       );
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
          'rgba(255, 0, 0, 0.5)',    
          'rgba(255, 200, 0, 0.5)',   
          'rgba(0, 162, 255, 0.5)',   
          'rgba(0, 192, 0, 0.5)',     
          'rgba(200, 0, 255, 0.5)',   
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
        
      },
    ],
  };

  return (
    <div style={{ height: "300px", width: "400px" }}>
      {data && <Pie data={resasd} options={options} />}
    </div>
  );
}




/////////////////////////////////////////////////////////

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
//   const [Labels, setLabels] = useState([]);
//   const [forDataSet, setForDataSet] = useState([]);
//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       tooltip: {
//         callbacks: {
//           label: function (context) {
//             const label = context.label || "";
//             const value = context.parsed || 0;
//             const dataset = context.dataset || {};
//             const total = dataset.data.reduce((acc, data) => acc + data, 0);
//             const percentage = ((value / total) * 100).toFixed(2) + "%";
//             return `${label}: ${percentage}`;
//           },
//         },
//       },
//     },
//   };

//   useEffect(() => {
//     if (data && data.length > 0) {
//       const lista = data.map((items) => items.tipoPropiedad);
//       setLabels(lista);
//     }
//   }, [data]);

//   useEffect(() => {
//     if (data && data.length > 0) {
//       const totalInmuebles = data.length;
//       const countPorTipo = data.reduce((acc, item) => {
//         acc[item.tipoPropiedad] = (acc[item.tipoPropiedad] || 0) + 1;
//         return acc;
//       }, {});

//       const porcentajes = Labels.map((label) => {
//         const count = countPorTipo[label] || 0;
//         return ((count / totalInmuebles) * 100).toFixed(2);
//       });

//       setForDataSet(porcentajes);
//     }
//   }, [data, Labels]);

//   const resasd = {
//     labels: Labels,
//     datasets: [
//       {
//         label: "Tipo de inmueble",
//         data: forDataSet,
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//         ],
//         borderColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(54, 162, 235, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div style={{ height: "300px", width: "400px" }}>
//       {data && <Pie data={resasd} options={options} />}
//     </div>
//   );
// }
 
///////////////////////////////////////////////////////////////

