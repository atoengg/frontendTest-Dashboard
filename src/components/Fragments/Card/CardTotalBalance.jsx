import React from "react";
import DropdownItem from "../../Elements/DropdownItem/DropdownItem";
import Dropdown from "../../Elements/Dropdown/Dropdown";
import { iconTotalBalance } from "../../../../image";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const CardTotalBalance = () => {
  const data = {
    labels: ["Oct", "Nov", "Dec", "Jan", "Feb"],
    datasets: [
      {
        label: "A",
        data: ["100", "40", "40", "25", "20"],
        backgroundColor: "#0085ff",
      },
      {
        label: "B",
        data: ["80", "35", "30", "20", "10"],
        backgroundColor: "#b6d5f3",
      },
    ],
  };
  return (
    <>
      <div className="bg-white p-3 rounded-3">
        <div className="d-flex align-items-center justify-content-between ">
          <h5 className="fw-semibold">Balance statistics</h5>

          <Dropdown title={"Filter"}>
            <DropdownItem label={"this month"} location={"#"} />
            <DropdownItem label={"last month"} location={"#"} />
            <DropdownItem label={"this month"} location={"#"} />
          </Dropdown>
        </div>

        <div className="row d-flex h-100">
          <div className="col-lg-3 d-flex flex-column h-100">
            <h5 className="font-bold">$564</h5>
            <div className="d-flex gap-2">
              <img src={iconTotalBalance} alt="" className="" />
              <p>Your total balance</p>
            </div>

            <p className="earnings">always see your earnings update</p>
          </div>

          <div className="col-lg-9 d-flex flex-column Bar">
            <Bar data={data} className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTotalBalance;
