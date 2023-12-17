import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
function UserRoot() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default UserRoot;
