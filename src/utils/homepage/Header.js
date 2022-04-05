import React from "react";
import "./Homepage.css";
import img1 from "../images/index.png";
import img11 from "../images/scroll-up.png";
function Top() {
  setInterval(() => {
    var date = new Date();
    var m = date.getMonth();
    var month = "";
    switch (m) {
      case 0: {
        month = "1";
        break;
      }
      case 1: {
        month = "2";
        break;
      }
      case 2: {
        month = "3";
        break;
      }
      case 3: {
        month = "4";
        break;
      }
      case 4: {
        month = "5";
        break;
      }
      case 5: {
        month = "6";
        break;
      }
      case 6: {
        month = "7";
        break;
      }
      case 7: {
        month = "8";
        break;
      }
      case 8: {
        month = "9";
        break;
      }
      case 9: {
        month = "10";
        break;
      }
      case 10: {
        month = "11";
        break;
      }
      case 11: {
        month = "12";
        break;
      }
    }
    document.getElementById("demo2").innerHTML =
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds() +
      "  |  " +
      date.getDate() +
      "-" +
      month +
      "-" +
      date.getFullYear();
  }, 1000);
  return (
    //scroll
    <div id="top">
      <a id="ok" href="#top" class="arw">
        <img
          src={img11}
          style={{ width: "30px", height: "30px", visibility: "visible" }}
        />
      </a>
      <div class="overall">
        <nav>
          <img
            src={img1}
            style={{
              width: "50px",
              height: "50px",
              display: "flex",
              position: "fixed",
              top: "1%",
              left: "1%",
              visibility: "visible",
              zIndex: "1000",
            }}
          />
          <div class="dateTop">
            <b>
              <p id="demo2"></p>
              <p id="demo1"></p>
            </b>
          </div>
          <div class="NavContainer">
            &nbsp; &nbsp;
            <div class="Insights">
              <a href="https://www.ey.com/en_in">Insights</a>
            </div>
            <div class="AboutUs">
              <a href="#">About Us</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Top;
