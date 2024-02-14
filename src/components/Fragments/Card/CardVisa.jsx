import React from "react";
import { iconVisa } from "../../../../image";

const CardVisa = () => {
  return (
    <>
      <div className="card__visa rounded-4 p-3">
        <div className="d-flex align-items-center justify-content-between">
          <h1>S.</h1>
          <h1>Visa</h1>
        </div>
        <div className="d-flex justify-content-center">
          <img src={iconVisa} alt="iconCard" className="iconVisa " />
        </div>
        <p className="text-white">****9838</p>
        <div className="d-flex align-items-center justify-content-between text-white">
          <p>Jhon Demon</p>
          <p>08/12</p>
        </div>
      </div>
    </>
  );
};

export default CardVisa;
