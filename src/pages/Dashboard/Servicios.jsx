import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function GraficaServicios({ data }) {
  console.log('Data de Servicios:');
  console.log(data);
  const [Labels, setLabels] = useState([]);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  useEffect(() => {
    if (data && Array.isArray(data)) {
      // Filtrar servicios activos
      const serviciosActivos = data.filter((item) => item.estado);

      // Mapear solo los nombres de servicios activos
      const lista = serviciosActivos.map((items) => items.Nombre_Servicio);
      console.log(lista);
      setLabels(lista);
    }
  }, [data]);

  const resasd = {
    labels: Labels,
    datasets: [
      {
        label: 'Servicios',
        data: [1, 3, 4, 6, 1, 5, 3, 2], // organizar para llamar los verdaderos datos
        tension: 0.6,
        fill: true, 
        backgroundColor: 'rgba(0, 51, 102, 1)',  
        pointRadius: 5,
        pointBorderColor: 'rgba(0, 51, 102, 1)',  // Azul mar sólido
        pointBackgroundColor: 'rgba(0, 51, 102, 1)',  // Azul mar sólido
        
        

      },
    ],
  };

  return (
    <div style={{ height: '300px', width: '400px' }}>
      {data && <Line data={resasd} options={options} />}
    </div>
  );
}
