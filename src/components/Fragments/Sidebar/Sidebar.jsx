import React from "react";
import {
  BsBell,
  BsBoxArrowRight,
  BsChatRightDots,
  BsClock,
  BsGear,
  BsHouseExclamation,
  BsPeople,
  BsWallet,
} from "react-icons/bs";
import SidebarItem from "../../Elements/SidebarItem/SidebarItem";
import { iconProfileUser } from "../../../../image";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="offcanvass offcanvas-start">
          <div className="offcanvas-header text-center ">
            <h1>S.</h1>
          </div>
          <div className="d-grid wrapper align-items-stretch ">
            <div className="sidebarChat text-center">
              <BsChatRightDots size={35} />
            </div>
            <div className="offcanvass-body d-grid align-items-stretch mt-4">
              <ul className="menu d-grid justify-content-center align-items-center mx-auto p-0">
                <SidebarItem icon={<BsHouseExclamation />} location={"/"} />
                <SidebarItem
                  icon={<BsBell />}
                  location={"/dashboard/notifications"}
                />
                <SidebarItem icon={<BsClock />} location={"/dashboard/time"} />
                <SidebarItem icon={<BsPeople />} location={"/dashboard/user"} />
                <SidebarItem
                  icon={<BsWallet />}
                  location={"/dashboard/withdraw"}
                />
                <SidebarItem
                  icon={<BsGear />}
                  location={"/dashboard/setting"}
                />
              </ul>
            </div>
            <div className="d-flex flex-column align-items-center gap-2">
              <img src={iconProfileUser} alt="" />

              <BsBoxArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
