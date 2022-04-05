import React from "react";
import "./Homepage.css";

function Middle() {
  return (
    <div class="cover-background">
      <div class="right-div">
        <div class="inner-right-div">
          <h1>Let's create a better world together</h1>
          <br />
          <h2>
            Ernst and Young
            <br />
            Our purpose is Building a better working world .
          </h2>
          <br />
          <div class="buttons">
            <a href="./signup/signup.html">
              <div class="SignupButton">
                <button type="button" class="btn btn-lg">
                  Sign Up
                </button>{" "}
              </div>
            </a>
            <br />
            <div class="LoginButton">
              <button type="button" class="btn btn-lg">
                <a
                  href="./signin/signin.html"
                  style={{ textDecoration: "none" }}
                >
                  Login
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Middle;
