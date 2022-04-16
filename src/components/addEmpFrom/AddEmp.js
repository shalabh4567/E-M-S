import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddEmp.css";

const AddEmp = (props) => {
  // props.setFormFalse(false)

  const history = useNavigate();

  //console.log(props.employee)

  const closeForm = () => {
    props.setFormFalse(false);
  };

  const [empName, setEmpName] = useState("");
  const [empId, setEmpId] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [empSalary, setEmpSalary] = useState("");
  const [empDesignation, setEmpDesignation] = useState("");
  const [empGender, setEmpGender] = useState("Male");
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

    fetch("http://localhost:3001/employees", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        empId: empId,
        empName: empName,
        gender: empGender,
        email: empEmail,
        empSalary: empSalary,
        designation: empDesignation,
        dob: empDOB,
        joiningDate: empJOI,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        props.setFormFalse(false);
        props.setEmployee([...props.employee, data]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="add-employee">
        <div className="emp-form-heading">
          <h3>
            Employee Details{" "}
            <span className="cross-add-emp" onClick={closeForm}>
              &times;
            </span>
          </h3>
        </div>
        <form onSubmit={addEmpData}>
          <div className="empName">
            <input
              type="text"
              placeholder="Employee name"
              value={empName}
              required
              onChange={(e) => setEmpName(e.target.value)}
            />
          </div>
          <div className="empId">
            <input
              type="text"
              placeholder="Employee Id"
              value={empId}
              required
              onChange={(e) => setEmpId(e.target.value)}
            />
          </div>
          <div className="empEmail">
            <input
              type="text"
              placeholder="Email Id"
              value={empEmail}
              required
              onChange={(e) => setEmpEmail(e.target.value)}
            />
          </div>
          <div className="gender-designation">
            <select
              name="gender"
              id="gender"
              value={empGender}
              onChange={(e) => {
                console.log(e.target.value);
                setEmpGender(e.target.value);
              }}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            <input
              type="text"
              placeholder="Designation"
              value={empDesignation}
              required
              onChange={(e) => setEmpDesignation(e.target.value)}
            />
          </div>
          <div className="salary-dob">
            <input
              type="text"
              placeholder="Salary"
              value={empSalary}
              required
              onChange={(e) => setEmpSalary(e.target.value)}
            />
            <input
              type="date"
              onFocus={(e) => (e.currentTarget.type = "date")}
              onBlur={(e) => (e.currentTarget.type = "text")}
              value={empDOB}
              required
              onChange={(e) => setEmpDOB(e.target.value)}
            />
          </div>
          <div className="joining-date">
            <input
              type="text"
              onFocus={(e) => (e.currentTarget.type = "date")}
              onBlur={(e) => (e.currentTarget.type = "text")}
              placeholder="joining date(dd/mm/yyyy)"
              value={empJOI}
              onChange={(e) => setEmpJOI(e.target.value)}
            />
          </div>

          <div className="add-emp-button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="overlay" onClick={closeForm}></div>
    </>
  );
};

export default AddEmp;
