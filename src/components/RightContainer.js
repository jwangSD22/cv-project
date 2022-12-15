import React from "react";

function RightContainer({ personal, photoURL }) {
  return (
    <div className="RightContainer">
      <document>
        <page>
          <div className="rTopBanner">
            <h1>
              {personal.fName} {personal.lName}
            </h1>
            <h2>{personal.title}</h2>
          </div>
          <div className="rContainer">
            <div className="rLeftContent">
              <div className="rDescription">
                Description
                <p>{personal.desc}</p>
              </div>
              <div className="rExperienceContainer">experience</div>
              <div className="rEducationContainer">education </div>
            </div>
            <div className="rRightColumn">
              {photoURL.map((imageSrc) => (
                <img src={imageSrc}></img>
              ))}
              personal details
              <div>{personal.address}</div>
              <div>{personal.phoneNum}</div>
              <div>{personal.email}</div>
            </div>
          </div>
        </page>
      </document>
    </div>
  );
}

export default RightContainer;
