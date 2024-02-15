import React from "react";
import { iconCrown } from "../../../../image";
import ButtonUpdate from "../../Elements/Button/ButtonUpdate";

const CardPremium = () => {
  return (
    <>
      <div className="card__premium rounded-4 border border-1 bg-transparent p-3">
        <p className="text-center fw-semibold">Go to premium</p>
        <img src={iconCrown} alt="" />

        <h5 className="mt-2 fw-bold">Need more features?</h5>

        <p className="text__update fw-semibold">
          Update your account to premium to get more features.
        </p>

        <div className="d-grid">
          <ButtonUpdate
            label={"Get now"}
            className={"btn btn-primary text-white rounded-4 fw-semibold py-3"}
          />
        </div>
      </div>
    </>
  );
};

export default CardPremium;
