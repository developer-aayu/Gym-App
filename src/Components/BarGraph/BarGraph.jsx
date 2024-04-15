import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS} from "chart.js";
import { CategoryScale , LinearScale , BarElement} from "chart.js"; 


const BarGraph = ({ sourceData }) => {
  ChartJS.register(CategoryScale);
  ChartJS.register(LinearScale);
  ChartJS.register(BarElement);

  return (
    <>
      <div className="" style={{ width: "700px", height: "300px" }}>
        <Bar
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "MAX PR",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Revenue Source",
              },
            },
          }}
        />
      </div>
    </>
  );
  
};

export default BarGraph;
