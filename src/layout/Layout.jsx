import React from "react";
import { BsSearch } from "react-icons/bs";
import "./Layout.style.css";
import Sidebar from "../components/Fragments/Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />

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
