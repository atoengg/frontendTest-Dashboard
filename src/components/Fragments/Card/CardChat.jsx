import React from "react";
import {
  iconDocChat,
  iconPersonChat2,
  iconProfileUser,
} from "../../../../image";
import { BsEmojiSmile } from "react-icons/bs";
import ButtonSendChat from "../../Elements/Button/ButtonSendChat";

const CardChat = () => {
  return (
    <>
      <div className="card__chat bg-white p-3 rounded-3">
        <h5 className="fw-bold">Esther Howard</h5>
        <div className="d-flex justify-content-end align-items-center gap-2">
          <div className="wrapp__chat__right text-white px-3 py-1 d-flex align-items-center">
            <p>Are you ready?</p>
          </div>
          <img src={iconProfileUser} alt="" />
        </div>
        <div className="d-flex justify-content-start align-items-center gap-2 mt-4">
          <img src={iconPersonChat2} alt="" className="" />
          <div className="wrapp__chat__left px-3 py-1 d-flex align-items-center">
            <p className="fw-semibold">I have prepared everything</p>
          </div>
        </div>

        <div className="wrapp__message mt-4 rounded-3 w-100">
          <form action="#">
            <input
              className="form-control border-0 mb-2"
              type="text"
              placeholder="Type your message"
              aria-label="example"
            />
            <div className="d-flex justify-content-between px-2 py-2">
              <div className="d-flex align-items-center gap-2 ">
                <BsEmojiSmile />
                <img src={iconDocChat} alt="" />
              </div>
              <ButtonSendChat
                label={"Send chat"}
                className={"btn btn-sm btn__send__chat text-white fw-semibold"}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CardChat;
