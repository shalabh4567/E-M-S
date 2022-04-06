import React, { useState } from "react";
import "./AddEmp.css";

const AddEmp = (props) => {
  // props.setFormFalse(false)

  const closeForm = () => {
    props.setFormFalse(false);
  };

  const [empName, setEmpName] = useState("");
  const [empId, setEmpId] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [empSalary, setEmpSalary] = useState("");
  const [empDesignation, setEmpDesignation] = useState("");
  const [empGender, setEmpGender] = useState("");
  const [empDOB, setEmpDOB] = useState("");
  const [empJOI, setEmpJOI] = useState("");

  const addEmpData = (e) => {
    e.preventDefault();
    console.log(
      empName,
      empId,
      empEmail,
      empSalary,
      empDesignation,
      empGender,
      empDOB,
      empJOI
    );
  };

  return (
    <>
      <div className="add-employee">
        <div className="emp-form-heading">
          <h3>
            Employee Detials{" "}
            <span className="cross-add-emp" onClick={closeForm}>
              &times;
            </span>
          </h3>
        </div>
        <form onSubmit={addEmpData}>
          <div className="empName">
            <input type="text" placeholder="Employee name" />
          </div>
          <div className="empId">
            <input type="text" placeholder="Employee Id" />
          </div>
          <div className="empEmail">
            <input type="text" placeholder="Email Id" />
          </div>
          <div className="gender-designation">
            <input type="text" placeholder="Gender" />
            <input type="text" placeholder="Designation" />
          </div>
          <div className="salary-dob">
            <input type="text" placeholder="Salary" />
            <input
              type="date"
              onChange={(e) => setEmpDOB(e.target.value)}
            />
          </div>
          <div className="joining-date">
            <input type="date" />
          </div>

          <div className="add-emp-button">
            <button>Submit</button>
          </div>
        </form>
      </div>
      <div className="overlay" onClick={closeForm}></div>
    </>
  );
};

export default AddEmp;
