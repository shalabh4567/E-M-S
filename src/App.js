import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import EmpData from "./components/empData/EmpData";
import HomePageComponent from "./components/homePageComponent/HomePageComponent";
import Dashboard from "./components/dashboardComponent/DashboardComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/empdata" element={<EmpData />} />
          <Route exact path="/" element={<HomePageComponent />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
