import { ApiGet } from "../../hooks/useApi";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Dashboard() {
  const [categorias, loadingCategorias, errorCategorias] = ApiGet(
    "https://rcservice.onrender.com/api/proveedores/Categoria"
  );

  if (loadingCategorias) {
    return <p>Cargando...</p>;
  }

  if (errorCategorias) {
    console.log("❎", errorCategorias);
    console.log("🚩");
    return <p>Ocurrió un error: {errorCategorias?.message}</p>;
  }

  const nombresCategorias = categorias.map((dato) => dato.Nombre_Categoria);
  const data = {
    labels: nombresCategorias,
    datasets: [
      {
        label: "Categorias de Servicio",
        data: [23, 30, 30, 17],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
}