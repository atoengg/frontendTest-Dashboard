import React from "react";
import {
  BsBell,
  BsBoxArrowRight,
  BsChatRightDots,
  BsClock,
  BsGear,
  BsHouseExclamation,
  BsPeople,
  BsSearch,
  BsWallet,
} from "react-icons/bs";
import "./Layout.style.css";
import SidebarItem from "../components/Elements/SidebarItem/SidebarItem";
import { iconProfileUser } from "../../image";

const Layout = ({ children }) => {
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

      <main>
        <nav
          id="navbar"
          className="navbar bg-transparant d-flex align-items-center justify-content-between"
        >
          <div className="">
            <h2 className="fw-bold">Hello, Jhon. D</h2>
            <p className="fw-normal">View and control your finances here!</p>
          </div>

          <div className="rounded-circle bg-white p-3 d-flex align-items-center ">
            <BsSearch size={22} />
          </div>
        </nav>
        {children}
      </main>
    </>
  );
};
export default Layout;
