import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js";
import { ArcElement } from "chart.js";

const PieChart = ({ PieSourceData }) => {
  ChartJS.register(ArcElement);
  return (
    <>
      <div className="bg-black" style={{ width: "700px", height: "300px" }}>
        <Doughnut
          data={{
            labels: PieSourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: PieSourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                display : true,
                text: "Revenue Sources",
              },
            },
            elements: {
              arc: {
                backgroundColor: 'rgba(255, 255, 255, 0.6)' 
              }
            }
          }}
          
        />
      </div>
    </>
  );
};

export default PieChart;
