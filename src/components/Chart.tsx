// components/BarChart.js
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";

interface Props{
    chartData:any
}
export const BarChart = ({ chartData}:Props ) => {
  return (
    <div className="border  border-gray-700 rounded-xl p-5 w-2/4">
      <h4>Overview</h4>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};


import { Line } from "react-chartjs-2";
export function LineChart({ chartData }:Props) {
  return (
    <div>
      <h2 className="text-start">Line Chart</h2>
      <Line
      className="bg-white"
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}

export function PieChart({ chartData }:{chartData:any}) {
    return (
      <div className="chart-container">
        <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
        <Pie
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Users Gained between 2016-2020"
              }
            }
          }}
        />
      </div>
    );
  }