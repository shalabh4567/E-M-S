import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DeleteData.css";

const DeleteData = (props) => {
    const history = useNavigate();
  const closeForm = () => {
    props.setDeleteForm(false);
  };

  const [empName, setEmpName] = useState("");
  const [empId, setEmpId] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [empSalary, setEmpSalary] = useState("");
  const [empDesignation, setEmpDesignation] = useState("");
  const [empGender, setEmpGender] = useState("");
  const [empDOB, setEmpDOB] = useState("");
  const [empJOI, setEmpJOI] = useState("");

  const delEmpData = (e) => {
    
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

    fetch("http://localhost:3001/employees/"+ props.deleteId, {
      method: "DELETE",
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
        props.setDeleteForm(false);
        // props.setEmployee([...props.employee, data]);
        history("/empdata");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    <form onSubmit={delEmpData} method="DELETE">
      <div className="add-employee">
        <div className="emp-form-heading">
          <h3>
            Delete Employee Detials{" "}
            <span className="cross-add-emp" onClick={closeForm}>
              &times;
            </span>
          </h3>
        </div>
        
          <h1 style={{textAlign:"center"}}>Are You sure ?</h1>         

          <div className="add-emp-button">
            <button>Yes</button>
          </div>
       
      </div>
      <div className="overlay" onClick={closeForm}></div>
      </form>
    </>
  );
};

export default DeleteData;
