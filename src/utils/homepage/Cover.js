import React from "react";
import { Link } from "react-router-dom";
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
            <div class="SignupButton">
              <button type="button" class="btn btn-lg">
                <Link to="signup">Sign Up</Link>
              </button>{" "}
            </div>

            <br />
            <div class="LoginButton">
              <button type="button" class="btn btn-lg">
                <Link to="login">Login</Link>
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Middle;
