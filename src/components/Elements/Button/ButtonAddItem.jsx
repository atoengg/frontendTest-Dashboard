import React from "react";

const ButtonAddItem = ({ icon, className }) => {
  return (
    <>
      <button type="button" className={className ? className : "btn"}>
        <span>{icon}</span>
      </button>
    </>
  );
};

export default ButtonAddItem;
