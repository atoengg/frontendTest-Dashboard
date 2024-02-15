import React from "react";
import { BsArrowRightShort, BsThreeDotsVertical } from "react-icons/bs";
import { dataSpending } from "../../DataComponents/DataComponents";

const CardSpending = () => {
  return (
    <>
      <div className="card__spending rounded-4 border border-1 bg-transparent p-3 my-4  ">
        <div className="d-flex align-items-center justify-content-between">
          <h5>Latest spending</h5>

          <BsThreeDotsVertical />
        </div>

        {dataSpending?.map((item, index) => (
          <div
            className="d-flex align-items-center flex-row gap-3 mt-2"
            key={index}
          >
            <img src={item.icon} alt="" />
            <div className="d-flex flex-column">
              <p className="fw-semibold mt-2">{item.title}</p>
              <p className="">{item.time}</p>
            </div>
          </div>
        ))}

        <div className="d-flex flex-row view__all align-items-center justify-content-center mt-3">
          <p className="fw-semibold">
            View all{" "}
            <span>
              <BsArrowRightShort />
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CardSpending;
