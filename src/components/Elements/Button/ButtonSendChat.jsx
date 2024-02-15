import React from "react";

const ButtonSendChat = ({ label, className }) => {
  return (
    <>
      <button type="submit" className={className ? className : "btn"}>
        {label}
      </button>
    </>
  );
};

export default ButtonSendChat;
