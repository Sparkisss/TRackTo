import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

interface ChartProps {
    data: any;
    options: any;
  }

export function DashboardChart({ data, options }: ChartProps) {
  return <Bar data={data} options={options} style={{ paddingLeft: "10.5em" }} />
}