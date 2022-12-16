import React from "react";
import ExperienceList from "./ExperienceList"
import EducationList from "./EducationList";



function RightContainer({ personal, photoURL, exp, edu}) {
  return (
    <div className="RightContainer">
 
          <div className="rTopBanner">
            <h1>
              {personal.fName} {personal.lName}
            </h1>
            <h2>{personal.title}</h2>
          </div>
          <div className="rContainer">
            <div className="rLeftContent">
              <div className="rDescription">
                {personal.desc}
              </div>
              <ExperienceList exp={exp} />
              <EducationList edu={edu} />
            </div>
            <div className="rRightContent">
              {photoURL.map((imageSrc) => (
                
                <img src={imageSrc} key = {imageSrc.toString()}></img>
              ))}
              personal details
              <p></p>

              <div>Address: {personal.address}</div>
              <p></p>
              <div>Phone Number: {personal.phoneNum}</div>
              <p></p>

              <div>Email: {personal.email}</div>
              <p></p>

            </div>
          </div>
  
    </div>

    



  );

}

export default RightContainer;
