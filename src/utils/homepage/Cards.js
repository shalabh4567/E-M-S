import React from "react";
import "./Homepage.css";

const CardsEMS = () => {
  return (
    <div className="main">
      <div className="card-container">
        <div className="card">
          <div className="cardhead">Ernst & Young</div>
          <div className="cardvalue">
            Ernst & Young Global Limited, is a multinational network with
            headquarters in London, England. EY operates as a network of member
            firms which are structured as separate legal entities in a
            partnership, which has 312,250 employees in over 700 offices in more
            than 150 countries around the world.
          </div>
        </div>

        <div className="card left">
          <div className="cardhead">Employee Management System</div>
          <div className="cardvalue">
            An employee management system provides managers with insights into
            their workforce, and helps them to better plan and manage work hours
            to easily control labor costs and increase productivity.
          </div>
        </div>

        <div className="card">
          <div className="cardhead">Capstone Project</div>
          <div className="cardvalue">
            Creating a web application where user can add employee information
            using CRUD(Create, Read, Update, Delete) operations.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsEMS;
