import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sleep } from "../../utils/sleepPropmise";
import LeftSide from "../../utils/loginSignupLeftSide/LeftSide";
import ToastMessage from "../toastMessage/ToastMessage";
import "./Signup.css";

const Signup = () => {
  const history = useNavigate();

  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [err, setErr] = useState(null);

  const fnameError = useRef(null);
  const emailError = useRef(null);
  const passwordError = useRef(null);

  const signUp = (e) => {
    e.preventDefault();
    // console.log(fname, email, password);
    if (fname && email && password === "") {
      alert("all fields are required");
      return;
    }

    fetch("http://localhost:4000/admins")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const isAdmin = data.find((adm) => adm.email === email);
        if (isAdmin) {
          alert("your are already an admin");
          return;
        }

        fetch("http://localhost:4000/admins", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name: fname,
            email: email,
            password: password,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setShowToast(true);
            sleep(1500).then(() => history("/login"));
          });
      })
      .catch((err) => {
        setErr("Server Error");
        setShowToast(true);
      });
  };

  return (
    <div className="signup-container">
      <ToastMessage
        showToast={showToast}
        setShowToast={setShowToast}
        message={err ? err : "Signed In Succesfully"}
      />
      <LeftSide />
      <div className="right-view">
        <div className="right-view-inner">
          <div className="right-view-margin">
            <div className="logo">
              <Link to="/">
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
                    style={{ fill: "#2e2e38" }}
                  />
                  <polygon
                    points="7.7,42.7 17,42.7 17,37.3 7.7,37.3 7.7,33 18,33 14.6,27 0,27 0,52.9 20.6,52.9 20.6,47 7.7,47 "
                    style={{ fill: "#2e2e38" }}
                  />
                </svg>
              </Link>
            </div>

            <div className="signIn-Written">
              <h5>Signup to begin with managing your tasks.</h5>
            </div>
            <div className="forms-for-signup">
              <form onSubmit={signUp}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={fname}
                    aria-describedby="emailHelp"
                    required
                    onChange={(e) => {
                      if (e.target.value.length === 0) {
                        fnameError.current.innerHTML = "*field is required";
                        setFname("");
                        return;
                      }
                      fnameError.current.innerHTML = "";
                      setFname(e.target.value);
                    }}
                  />
                  <span
                    className="errorMessage"
                    id="emailError"
                    ref={fnameError}
                  ></span>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email ID
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    required
                    onChange={(e) => {
                      if (e.target.value.length === 0) {
                        emailError.current.innerHTML = "*field is required";
                        setEmail("");
                        return;
                      }
                      emailError.current.innerHTML = "";
                      setEmail(e.target.value);
                    }}
                  />
                  <span
                    className="errorMessage"
                    id="emailError"
                    ref={emailError}
                  ></span>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    required
                    onChange={(e) => {
                      if (e.target.value.length === 0) {
                        passwordError.current.innerHTML = "*field is required";
                        setPassword("");
                        return;
                      }
                      passwordError.current.innerHTML = "";
                      setPassword(e.target.value);
                    }}
                  />
                  <span
                    className="errorMessage"
                    id="emailError"
                    ref={passwordError}
                  ></span>
                </div>
                <button type="submit" className="btn submit-button">
                  Signup
                </button>
              </form>
            </div>
            <div className="remember-forgot-password">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <div className="signup-with-google">
              <Link to="/login">
                <h6>
                  Have an account? <u>Signin</u>
                </h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
