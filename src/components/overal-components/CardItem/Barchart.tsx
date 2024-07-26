import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  // Define chart data with an array of numbers
  const data = {
    labels: [], // No labels
    datasets: [{
      label: 'My Dataset',
      data: [10, 44, 30234, 4032, 530], // Example data
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };

  // Define chart options to hide labels and grid lines
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.raw}` // Only show raw value in tooltip
        }
      }
    },
    scales: {
      x: {
        display: false, // Hide x-axis
      },
      y: {
        display: false, // Hide y-axis
      }
    }
  };

  return (
    <div className='chart-container'>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
