import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';

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
  console.log('Data de categorias:');
  console.log(data);
  const [Labels, setLabels] = useState([]);
  const [forDataSet, setForDataSet] = useState([]);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  useEffect(() => {
    const lista = data.map((items) => items.Nombre_Categoria);
    console.log(lista);
    setLabels(lista);
  }, [data]);

  const resasd = {
    labels: Labels,
    datasets: [
      {
        label: 'Categorias de servicio',
        data: [1, 3, 4, 6, 1, 5, 3, 2], // organizar para llamar los verdaderos datos
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
    <div style={{ height: '300px', width: '400px' }}>
      {data && <Bar data={resasd} options={options} />}
    </div>
  );
}
