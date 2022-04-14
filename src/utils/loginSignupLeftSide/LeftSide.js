import React from "react";
import "./LeftSide.css"

const LeftSide = () => {
  return (
    <div className="left-view">
      <div className="left-view-inner">
        <div className="circle-horizontalLine">
          <i className="fa-solid fa-quote-left"></i>
        </div>
        <div className="left-view-heading">
          <div className="horizontal-line-div">
            <div className="horizontal-line"></div>
          </div>
          <div className="heading-div">
            <h6>Turning Imaginations to reality.</h6>
          </div>
          <div className="heading-paragraph">
            <br/>
            <h6>
              “Creativity is inventing, experimenting, growing, taking risks, breaking rules, making mistakes, and having fun.”
            </h6>
          </div>
          <div className="author">
            <div className="author-dashed-main">
              <div className="author-dashed"></div>
            </div>
            <div className="author-name">
              <h5>Mary Lou Cook</h5>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
