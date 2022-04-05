import React from "react";
import "./AddEmp.css";

const AddEmp = () => {
  return (
    <>
      <div className="add-employee hidden">
        <div className="emp-form-heading">
          <h3>
            Employee Detials <span className="cross-add-emp">&times;</span>
          </h3>
        </div>
        <form>
          <div className="empName">
            <input type="text" placeholder="Employee name" />
          </div>
          <div className="empId">
            <input type="text" placeholder="Employee Id" />
          </div>
          <div className="empEmail">
            <input type="text" placeholder="Employee Id" />
          </div>
          <div className="gender-designation">
            <input type="text" placeholder="Gender" />
            <input type="text" placeholder="Designation" />
          </div>
          <div className="salary-dob">
            <input type="text" placeholder="Salary" />
            <input type="date" />
          </div>
          <div className="joining-date">
            <input type="date" />
          </div>

          <div className="add-emp-button">
            <button>Submit</button>
          </div>
        </form>
      </div>
      <div className="overlay hidden"></div>
    </>
  );
};

export default AddEmp;
