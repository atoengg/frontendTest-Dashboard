import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Notifications from "../pages/Notifications/Notifications";
import Time from "../pages/Time/Time";
import User from "../pages/User/User";
import WithDraw from "../pages/WithDraw/WithDraw";
import Setting from "../pages/Setting/Setting";

const Routing = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Notifications />} path="dashboard/notifications" />
      <Route element={<Time />} path="dashboard/time" />
      <Route element={<User />} path="dashboard/user" />
      <Route element={<WithDraw />} path="dashboard/withdraw" />
      <Route element={<Setting />} path="dashboard/setting" />
    </Routes>
  );
};

export default Routing;
