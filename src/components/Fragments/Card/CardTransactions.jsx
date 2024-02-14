import React from "react";
import { dataListTransaction } from "../../DataComponents/DataComponents";
import { BsThreeDotsVertical } from "react-icons/bs";

const CardTransactions = () => {
  return (
    <>
      <div className="card__transactions bg-white rounded-3 p-3">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="fw-bold">Last transactions</h5>

          <div className="d-flex gap-3 align-items-center">
            <p className="text-decoration-underline">Newest</p>
            <p>Oldest</p>
          </div>
        </div>
        <hr />

        {dataListTransaction?.map((item, index) => (
          <>
            <div
              className="list__transaction__user d-flex flex-row align-items-center justify-content-between"
              key={index}
            >
              <div className="d-flex align-items-center gap-2">
                <img src={item.icon} alt="" />
                <div className="d-flex flex-column ">
                  <p className="fw-semibold">{item.name}</p>
                  <p>{item.time}</p>
                </div>
              </div>
              <div className="d-flex gap-3 justify-content-center">
                <p className="fw-semibold">{item.price}</p>
                <BsThreeDotsVertical />
              </div>
            </div>
            <hr className="mt-2" />
          </>
        ))}
      </div>
    </>
  );
};

export default CardTransactions;
