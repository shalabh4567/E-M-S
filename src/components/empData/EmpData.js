import React, { useState, useEffect } from "react";
import AddEmp from "../addEmpFrom/AddEmp";
import "./EmpData.css";

const EmpData = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const [employee, setEmployee] = useState(null);

  const [showAddform, setShowAddForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/employees")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEmployee(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const openAddForm = () => {
    setShowAddForm(true);
  };

  return (
    <div className="disBackground">
      <div className="heading">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 113 55"
          className="logo-name-Image"
          style={{ enableBackground: "new 0 0 113 55" }}
          xmlSpace="preserve"
        >
          <clipPath id="ey-logo-first-line">
            <rect x="42" y="36" width="71" height="10" />
          </clipPath>
          <clipPath id="ey-logo-second-line">
            <rect x="42" y="46" width="71" height="10" />
          </clipPath>
          <polygon
            className="ey-logo-yellow"
            points="51.2,0 0,19.3 0,19.3 51.2,10 "
            style={{ fill: "yellow" }}
          />
          <polygon
            points="34.3,27 30,35.5 25.6,27 17,27 26.1,42.7 26.1,52.9 33.8,52.9 33.8,42.7 42.8,27 "
            style={{ fill: "white" }}
          />
          <polygon
            points="7.7,42.7 17,42.7 17,37.3 7.7,37.3 7.7,33 18,33 14.6,27 0,27 0,52.9 20.6,52.9 20.6,47 7.7,47 "
            style={{ fill: "white" }}
          />
        </svg>
      </div>
      <div className="display-content p-2">
        <div className="crud-buttons">
          <button className="add-button" onClick={openAddForm}>
            <p>
              <i className="fa-solid fa-plus"></i> Add
            </p>
          </button>

          <button className="delete-button">
            <p>
              <i className="fa-solid fa-minus"></i> Delete
            </p>
          </button>
          <input
            type="text"
            className="serch-emp"
            placeholder="search by Emp Id"
          />
        </div>
        <div className="table-heading" style={{ overflowX: "auto" }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  />
                </th>
                <th scope="col">
                  <h3>Emp Name</h3>
                </th>
                <th scope="col">
                  <h3>Emp Id</h3>
                </th>
                <th scope="col">
                  <h3>Gender</h3>
                </th>
                <th scope="col">
                  <h3>Designation</h3>
                </th>
                <th scope="col">
                  <h3>Salary</h3>
                </th>
                <th scope="col">
                  <h3>Email</h3>
                </th>
                <th scope="col">
                  <h3>DOB</h3>
                </th>
                <th scope="col">
                  <h3>Joining date</h3>
                </th>
              </tr>
            </thead>
            <tbody className="table-body">
              {employee &&
                employee.map((emp, index) => {
                  return (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "tr-background" : ""}
                    >
                      <td scope="row">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                          className="empCheck"
                        />
                      </td>
                      <td>{emp.empId}</td>
                      <td>{emp.empName}</td>
                      <td>{emp.gender}</td>
                      <td>{emp.designation}</td>
                      <td>{emp.empSalary}</td>
                      <td>{emp.email}</td>
                      <td>{emp.dob}</td>
                      <td>{emp.joiningDate}</td>
                      <td>
                        <i
                          className="fa-solid fa-ellipsis-vertical"
                          style={{ color: "grey", cursor: "pointer" }}
                          data-toggle="modal"
                          data-target={"#e" + emp.empId}
                        ></i>
                      </td>
                      <td>
                        <div
                          className="modal fade"
                          id={"e" + emp.empId}
                          tabIndex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="exampleModalLabel"
                                  style={{ color: "black" }}
                                >
                                  {emp.empId + "Emplyoee"}
                                </h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">...</div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Save changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>

      {showAddform ? (
        <AddEmp
          setFormFalse={setShowAddForm}
          setEmployee={setEmployee}
          employee={employee}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default EmpData;
