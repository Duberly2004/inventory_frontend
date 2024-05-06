import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "../../data";
import { BarChart } from "../../components/Chart";
import { PieChart } from "../../components/Chart";
import { LineChart } from "../../components/Chart";
import RecentSales from "./RecentSales";
import SummaryCard from "../../components/cards/SummaryCard";
Chart.register(CategoryScale);
import { DollarSign } from "lucide-react";
import { ISumary } from "../../others/interfaces";
export const sumaries:ISumary[] = [
  {
    icon: <DollarSign className="w-4 text-gray-300"/>,
    title:"Total Revenue",
    amount:20,
    description:"These are the total income from all sales",
  },
  {
    icon: <DollarSign className="w-4 text-gray-300"/>,
    title:"total sales",
    amount:10,
    description:"This is a summary of the total of all sales",
  },
  {
    icon: <DollarSign className="w-4 text-gray-300"/>,
    title:"Total Revenue",
    amount:20,
    description:"These are the total income from all sales",
  }
]

export default function Dashboard() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  return (
    <section>
      <h4>DASHBOARD</h4>
      <p className="mb-4">Welcome to your dashboard</p>
      <div className="flex gap-3 my-3 justify-center">
        {sumaries.map((sumary:ISumary,index:number)=>(
          <SummaryCard key={index} sumary={sumary}/>
        ))}
      </div>
      <div className="flex justify-evenly gap-3">
          <BarChart chartData={chartData} />
          <RecentSales/>
      </div>
    </section>
  );
}