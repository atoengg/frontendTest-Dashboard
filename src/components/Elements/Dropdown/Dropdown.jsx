import React from "react";

const Dropdown = ({ title, children }) => {
  return (
    <>
      <div class="dropdown">
        <button
          className="btn btn-sm dropdown-toggle fw-semibold"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {title}
        </button>
        <ul class="dropdown-menu">{children}</ul>
      </div>
    </>
  );
};

export default Dropdown;
