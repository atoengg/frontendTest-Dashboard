import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const CheckboxItem = ({ label, value }) => {
  return (
    <>
      <div className="form-check d-flex align-items-center justify-content-between rounded-3">
        <div className="d-flex align-items-center p-2">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value={value}
            id={value}
          />
          <label class="form-check-label fw-semibold" for={value}>
            {label}
          </label>
        </div>

        <div className="p-2">
          <BsThreeDotsVertical />
        </div>
      </div>
    </>
  );
};

export default CheckboxItem;
