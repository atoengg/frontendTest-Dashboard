import React from "react";

const ButtonUpdate = ({ label, className }) => {
  return (
    <>
      <button type="button" className={className ? className : "btn"}>
        {label}
      </button>
    </>
  );
};

export default ButtonUpdate;
