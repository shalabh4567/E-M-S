import React from "react";
import "./Homepage.css";
import img2 from "../images/fb.png";
import img3 from "../images/twitter.png";
import img4 from "../images/utube.png";
import img5 from "../images/linkedin.png";
function FooterEMS() {
  return (
    <div>
      <footer>
        <div class="footer">
          <div class="emsImg">
            <img src="https://enterprisemadesimple.co.uk/wp-content/uploads/elementor/thumbs/EMS-Logo-white-pfk9anz76wwpgwk9arkqtyah9zhcb0r3d870byru9s.png" />
          </div>
          <div class="icons">
            <a href="https://www.facebook.com/EYCareersIndia/">
              <img src={img2} />
            </a>

            <a href="https://twitter.com/EY_India">
              <img src={img3} />
            </a>

            <a href="https://www.youtube.com/channel/UC7yFTL5ES3DQtZV0uRKhdDQ">
              <img src={img4} />
            </a>

            <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQG8iyWVOggeYAAAAX-6lu6AcGu-R4jLZ_wMXTLPYO5h4U61-uANg7LJrF5gysoJGu0HOZUnNmxfda76uWC4ervhRgQFAlSH4pykmQKLnj8jAaMeAiX3vHIH42xDzrHfTsTG0h8=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fernstandyoung">
              <img src={img5} />
            </a>
          </div>
          <div
            class="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", color: "white" }}
          >
            © 2022 Copyright:
            <a class="text-white" href="https://mdbootstrap.com/">
              EY-EMS
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterEMS;
