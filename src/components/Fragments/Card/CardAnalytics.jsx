import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const CardAnalytics = () => {
  const data = {
    labels: ["done", "in progres", "To do"],
    datasets: [
      {
        label: "A",
        data: ["320", "350", "120"],
        backgroundColor: ["blue", "yellow", "red"],
        circumference: 180,
        rotation: 270,
      },
    ],
  };
  return (
    <>
      <div className="card__analytics bg-white p-3 rounded-3">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="font-bold">Analytics</h5>
          <BsThreeDotsVertical />
        </div>
        <div className="position-relative">
          <Doughnut data={data} className="" />
          <div className="d-flex justify-content-center">
            <p className="position-absolute fw-semibold d-flex flex-column align-items-center bottom-50">
              90% <span>Done</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardAnalytics;
