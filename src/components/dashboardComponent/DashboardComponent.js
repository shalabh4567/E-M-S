import React from "react";
import Sidebar from "../../utils/dashboard/sidebar";
import Main from "../../utils/dashboard/maincover";
import Nav from "../../utils/dashboard/navbar";


const DashboardComponent = () => {
  return (
    <>
      <Sidebar />
      <Nav/>
      <Main />
    </>
  );
};

export default DashboardComponent;