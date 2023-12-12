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
  //     const lista = data.map((items) => items.Categoria_Servicio.Nombre_Categoria);

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
  //         barThickness: 40,
  //       borderRadius: 10,
       
  //       },
  //     ],
  //   };

  //   return (
  //     <div style={{ height: "300px", width: "500px" }}>
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
    const [labels, setLabels] = useState([]);
    const [dataCount, setDataCount] = useState([]);
    const options = {
      responsive: true,
      maintainAspectRatio: false,
    };
  
    useEffect(() => {
      if (data && data.length > 0) {
        const activeServices = data.filter((item) => item.estado);
  
        const counts = activeServices.reduce((acc, items) => {
          const categoryName = items.Categoria_Servicio.Nombre_Categoria;
  
          if (!acc[categoryName]) {
            acc[categoryName] = 1;
          } else {
            acc[categoryName]++;
          }
  
          return acc;
        }, {});
  
        setLabels(Object.keys(counts));
        setDataCount(Object.values(counts));
      }
    }, [data]);
  
    const resasd = {
      labels: labels,
      datasets: [
        {
          label: "Servicios por categoría",
          data: dataCount,
          backgroundColor: [
            "#3366cc",
            "#3399ff",
            "#003366",
            "#66b2ff",
            "#0080ff",
          ],
          borderColor: ["#3366cc", "#3399ff", "#003366", "#66b2ff", "#0080ff"],
          borderWidth: 1,
          barThickness: 40,
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
  