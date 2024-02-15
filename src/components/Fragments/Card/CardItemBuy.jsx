import React from "react";
import ButtonAddItem from "../../Elements/Button/ButtonAddItem";
import { BsPlus } from "react-icons/bs";
import CheckboxItem from "../../Elements/CheckboxItem/CheckboxItem";

const CardItemBuy = () => {
  return (
    <>
      <div className="card__itemsBuy bg-white p-3 rounded-3">
        <h5 className="fw-bold mb-3">List of items to buy</h5>
        <div className="d-flex gap-4">
          <div className="d-flex flex-column">
            <h4>02:00</h4>
            <p>Sat.August 12</p>
          </div>
          <div className="siku">
            <span>{">"}</span>
          </div>
          <div className="d-flex flex-column">
            <h4>05:00</h4>
            <p>Sat.September 12</p>
          </div>
        </div>

        <div className="shopping__list d-flex align-items-center justify-content-between mt-3">
          <p className="text-black">
            0/3 <span className="fw-semibold">Shopping list</span>
          </p>
          <p className="fw-semibold d-flex align-items-center text-black">
            <span>
              <ButtonAddItem
                icon={<BsPlus />}
                className={"btn-sm border-0 bg-transparent p-0"}
              />
            </span>{" "}
            Add an item
          </p>
        </div>

        <div className="row row-cols-2 checkbox_item">
          <div className="col">
            <CheckboxItem label={"Macbook"} value={"macbook"} />
          </div>
          <div className="col">
            <CheckboxItem label={"Motorcycle"} value={"motorcycle"} />
          </div>
          <div className="col">
            <CheckboxItem label={"Bicyle"} value={"bicyle"} />
          </div>
          <div className="col">
            <CheckboxItem label={"Asus"} value={"asus"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItemBuy;
