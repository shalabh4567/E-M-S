import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AddEmp.css";

const AddEmp = (props) => {
  // props.setFormFalse(false)

  const history = useNavigate();

  //console.log(props.employee)

  const closeForm = () => {
    props.setFormFalse(false);
  };


  const [empName, setEmpName] = useState(null);
  const [empEmail, setEmpEmail] = useState(null);
  const [empSalary, setEmpSalary] = useState(null);
  const [empDesignation, setEmpDesignation] = useState(null);
  const [empGender, setEmpGender] = useState();
  const [empDOB, setEmpDOB] = useState(null);
  const [empJOI, setEmpJOI] = useState(null);

  const addEmpData = (e) => {
    e.preventDefault();
    console.log(
      empName,
      empEmail,
      empSalary,
      empDesignation,
      empGender,
      empDOB,
      empJOI
    );
    if (empName && empEmail && empSalary && empDesignation === "") {
      alert("all fields are required");
      return;
    }

    let emId=parseInt(localStorage.getItem("latestEmpId"))+1;
    
    console.log(emId);
    let empId=emId;
    localStorage.setItem("latestEmpId",emId);

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
  
  // const [checkId, setcheckId] = useState(false);
  const [checkMail, setcheckMail] = useState(false);

  useEffect(() => {
    // setcheckId(false);
    setcheckMail(false);
   props.employee.map((em, index) => {
        // if(em.empId===empId){
        //   setcheckId(true);
        // }

        if(em.email===empEmail){
          setcheckMail(true);
        }
  })
  // if(checkId){
  //   alert("Employee Id already exist!");
  // }
  if(checkMail)
  {
    alert("Employee Email already exist!");
  }
  }, [empEmail, checkMail]);

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
          {/* <div className="empId">
            <input
              type="text"
              placeholder="Employee Id"
              value={empId}
              required
              onChange={(e) => setEmpId(e.target.value)}
            />
          </div> */}
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
              defaultValue="Male"
              onChange={(e) => setEmpGender(e.target.value)}
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
              placeholder="DOB(dd/mm/yyyy)"
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
              placeholder="Joining date(dd/mm/yyyy)"
              value={empJOI}
              onChange={(e) => setEmpJOI(e.target.value)}
            />
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
