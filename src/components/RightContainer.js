import React from "react";
import ExperienceList from "./ExperienceList"
import EducationList from "./EducationList";





const RightContainer = React.forwardRef(function ({ personal, photoURL, exp, edu},ref){
  
  return (
    
    <div ref = {ref} className="RightContainer">
 
          <div className="rTopBanner">
            <h1>
              {personal.fName} {personal.lName}
            </h1>
            <div className="title">{personal.title}</div>
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
              <h2>Personal details</h2>
              <p></p>

              <div><h3>Address</h3>{personal.address}</div>
              <p></p>
              <div><h3>Phone Number</h3>{personal.phoneNum}</div>
              <p></p>

              <div><h3>Email</h3>{personal.email}</div>
              <p></p>

            </div>
          </div>
  
    </div>

  );
   }
)


export default RightContainer;
