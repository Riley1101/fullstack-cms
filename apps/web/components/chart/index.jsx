import useInvoice from "@/hooks/useInvoice";
import dateFormat from "dateformat";
import styles from "./Chart.module.scss";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function selectWeek(date) {
  return Array(7)
    .fill(new Date(date))
    .map((el, idx) =>
      dateFormat(
        new Date(el.setDate(el.getDate() - el.getDay() + idx)),
        "shortDate"
      )
    );
}

const labels = selectWeek(new Date());

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Invoice Chart",
    },
  },
};

let transformData = (data) => {
  let tmp = [];
  if (!data) return [];
  let obj = {};
  labels.forEach((lab) => (obj[lab] = 0));
  data.forEach((item) => {
    let date = dateFormat(item.date, "shortDate");
    labels.map((lab) => {
      if (lab === date) {
        obj[lab] += 1;
      }
    });
    let chartData = Object.values(obj);
    tmp = chartData;
  });
  return tmp;
};
const InvoiceChart = () => {
  const { invoices } = useInvoice();
  let data = {
    labels,
    datasets: [
      {
        label: "Monthly",
        data: transformData(invoices),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className={styles.chart}>
      <h1 className={styles.chart__title}>Invoice Chart</h1>
      <div className={styles.chart__body}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};
export default InvoiceChart;
