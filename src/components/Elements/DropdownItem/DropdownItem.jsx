import React from "react";

const DropdownItem = ({ label, location }) => {
  return (
    <li>
      <a class="dropdown-item" href={location}>
        {label}
      </a>
    </li>
  );
};

export default DropdownItem;
