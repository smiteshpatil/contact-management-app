import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, //x axis
  LinearScale, // y axis
  PointElement,
} from "chart.js";
import CovidMap from "./CovidMap";

ChartJS.register(
  LineElement,
  CategoryScale, //x axis
  LinearScale, // y axis
  PointElement
);

const Chart = () => {
  const { isLoading, error, data } = useQuery("covidData", async () => {
    const response = await axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    return response.data;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Process the data for plotting
  const dates = Object.keys(data.cases);
  const cases = Object.values(data.cases);
  const deaths = Object.values(data.deaths);
  const recovered = Object.values(data.recovered);

  // Prepare the chart data
  const chartData = {
    labels: dates,
    datasets: [
      {
        label: "Cases",
        data: cases,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Deaths",
        data: deaths,
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
      {
        label: "Recovered",
        data: recovered,
        fill: false,
        borderColor: "rgb(54, 162, 235)",
        tension: 0.1,
      },
    ],
  };

  return (
    <>
      <h1 className="text-center font-medium my-4">Covid Cases Fluctuations</h1>
      <div className="w-3/4">
        <Line data={chartData} />
      </div>
      
      <div className="w-3/4">
      <h1 className="text-center font-medium my-4">Leaflet Map</h1>
        <CovidMap/>
      </div>
    </>
  );
};

export default Chart;
